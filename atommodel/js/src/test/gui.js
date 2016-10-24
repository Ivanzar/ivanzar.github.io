var gui = new dat.GUI();

var CameraGUIFolder = gui.addFolder("Camera");
var CameraGUIFolderPos = CameraGUIFolder.addFolder("position");
var CameraGUIFolderRot = CameraGUIFolder.addFolder("rotation");

CameraGUIFolderPos.add(Camera.position, "x");
CameraGUIFolderPos.add(Camera.position, "y");
CameraGUIFolderPos.add(Camera.position, "z");

CameraGUIFolderRot.add(Camera.rotation, "x", -360, 360, 1);
CameraGUIFolderRot.add(Camera.rotation, "y", -360, 360, 1);
CameraGUIFolderRot.add(Camera.rotation, "z", -360, 360, 1);