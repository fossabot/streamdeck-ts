import { expect } from "chai";
import "mocha";
import { dummyLogger } from "ts-log";
import EventFactory from "../../../src/events/incoming/EventFactory";
import MissingEventInPayloadError from "../../../src/events/incoming/exception/MissingEventInPayloadError";
import UnknownEventError from "../../../src/events/incoming/exception/UnknownEventError";
import DeviceDidConnectEvent from "../../../src/events/incoming/plugin/DeviceDidConnectEvent";
import KeyDownEvent from "../../../src/events/incoming/plugin/KeyDownEvent";
import KeyUpEvent from "../../../src/events/incoming/plugin/KeyUpEvent";
import SendToPluginIncomingEvent from "../../../src/events/incoming/plugin/SendToPluginIncomingEvent";
import TitleParametersDidChangeEvent from "../../../src/events/incoming/plugin/TitleParametersDidChangeEvent";
import WillAppearEvent from "../../../src/events/incoming/plugin/WillAppearEvent";
import WillDisappearEvent from "../../../src/events/incoming/plugin/WillDisappearEvent";

describe("EventFactory test", () => {
  it("throws an error if no event type is specified", () => {
    const factory = new EventFactory(dummyLogger);
    const event = {data: JSON.stringify({})} as any;
    expect(() => factory.createByMessageEvent(event)).to.throw(MissingEventInPayloadError);
  });

  it("throws an error on an unknown event type", () => {
    const factory = new EventFactory(dummyLogger);
    const event = {data: JSON.stringify({event: "hello"})} as any;
    expect(() => factory.createByMessageEvent(event)).to.throw(UnknownEventError);
  });

  it("should return a keydown event", () => {
    const recievedEvent = require("./fixtures/keyDownEvent.valid.json");
    const event = {data: JSON.stringify(recievedEvent)} as any;
    expect(new EventFactory(dummyLogger).createByMessageEvent(event)).to.be.instanceOf(KeyDownEvent);
  });

  it("should return a keyup event", () => {
    const recievedEvent = require("./fixtures/keyUpEvent.valid.json");
    const event = {data: JSON.stringify(recievedEvent)} as any;
    expect(new EventFactory(dummyLogger).createByMessageEvent(event)).to.be.instanceOf(KeyUpEvent);
  });

  it("should return a willappear event", () => {
    const recievedEvent = require("./fixtures/willAppearEvent.valid.json");
    const event = {data: JSON.stringify(recievedEvent)} as any;
    expect(new EventFactory(dummyLogger).createByMessageEvent(event)).to.be.instanceOf(WillAppearEvent);
  });

  it("should return a willdisappear event", () => {
    const recievedEvent = require("./fixtures/willDisappearEvent.valid.json");
    const event = {data: JSON.stringify(recievedEvent)} as any;
    expect(new EventFactory(dummyLogger).createByMessageEvent(event)).to.be.instanceOf(WillDisappearEvent);
  });

  it("should return a devicedidconnect event", () => {
    const recievedEvent = require("./fixtures/deviceDidConnectEvent.valid.json");
    const event = {data: JSON.stringify(recievedEvent)} as any;
    expect(new EventFactory(dummyLogger).createByMessageEvent(event)).to.be.instanceOf(DeviceDidConnectEvent);
  });

  it("should return a titelparamchange event", () => {
    const recievedEvent = require("./fixtures/titleParametersDidChangeEvent.valid.json");
    const event = {data: JSON.stringify(recievedEvent)} as any;
    expect(new EventFactory(dummyLogger).createByMessageEvent(event)).to.be.instanceOf(TitleParametersDidChangeEvent);
  });

  it("should return a sendtoplugin event", () => {
    const recievedEvent = require("./fixtures/sendToPluginEvent.valid.json");
    const event = {data: JSON.stringify(recievedEvent)} as any;
    expect(new EventFactory(dummyLogger).createByMessageEvent(event)).to.be.instanceOf(SendToPluginIncomingEvent);
  });
});
