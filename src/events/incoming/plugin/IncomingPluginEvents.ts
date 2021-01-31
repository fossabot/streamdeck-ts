export enum IncomingPluginEvents {
  ApplicationDidLaunch = 'applicationDidLaunch',
  ApplicationDidTerminate = 'applicationDidTerminate',
  DeviceDidConnect = 'deviceDidConnect',
  DeviceDidDisconnect = 'deviceDidDisconnect',
  KeyDown = 'keyDown',
  KeyUp = 'keyUp',
  PropertyInspectorDidAppear = 'propertyInspectorDidAppear',
  PropertyInspectorDidDisappear = 'propertyInspectorDidDisappear',
  SendToPlugin = 'sendToPlugin',
  SystemDidWakeUp = 'systemDidWakeUp',
  TitleParametersDidChange = 'titleParametersDidChange',
  WillAppear = 'willAppear',
  WillDisappear = 'willDisappear',
}
