(function(){
    var script = {
 "start": "this.playAudioList([this.audio_7126F165_64D9_F323_41D5_CE773A6BA2EA]); this.init(); this.set('mute', true)",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "layout": "absolute",
 "id": "rootPlayer",
 "definitions": [{
 "class": "Video",
 "thumbnailUrl": "media/video_477569AD_54DD_6C0D_41C2_BAF91B5B9354_t.jpg",
 "label": "con obstaculo",
 "scaleMode": "fit_inside",
 "width": 2160,
 "loop": false,
 "id": "video_477569AD_54DD_6C0D_41C2_BAF91B5B9354",
 "height": 1080,
 "video": {
  "width": 2160,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_477569AD_54DD_6C0D_41C2_BAF91B5B9354.mp4"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C824E25_64D8_B120_41AA_B993630C7CED"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7A35AEC4_69AA_14A1_41B2_E3716B599E18",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.28,
  "pitch": 0
 }
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_6AD51E38_6448_F121_41C2_7C4255C5B257_t.jpg",
 "label": "0717(1)",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_6AD51E38_6448_F121_41C2_7C4255C5B257",
 "height": 1620,
 "video": {
  "width": 784,
  "class": "VideoResource",
  "height": 1176,
  "mp4Url": "media/video_6AD51E38_6448_F121_41C2_7C4255C5B257.mp4"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7ADE8EB4_69AA_14E2_41C4_456F1CDA135E",
 "levels": [
  {
   "url": "media/popup_77DE9676_6449_B120_41D0_A9549A023D0E_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_77DE9676_6449_B120_41D0_A9549A023D0E_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_77DE9676_6449_B120_41D0_A9549A023D0E_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_5D14BBF8_5668_E242_4193_5A819379C1D0",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 5)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_camera"
  },
  {
   "end": "this.trigger('tourEnded')",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "media": "this.panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_camera"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_7AE09EA5_69AA_14E3_419F_5B3DF234679C",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7AE09EA5_69AA_14E3_419F_5B3DF234679C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7AE09EA5_69AA_14E3_419F_5B3DF234679C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_6AD51E38_6448_F121_41C2_7C4255C5B257",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7A018EE4_69AA_1461_41D7_1015034FB2AD",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.04,
  "pitch": 0
 }
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "mouseControlMode": "drag_acceleration",
 "touchControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_599C011C_55B8_C90F_41D1_373A93BC79BD",
 "gyroscopeEnabled": true
},
{
 "manualZoomSpeed": 1,
 "class": "RotationalCamera",
 "manualRotationSpeed": 1800,
 "automaticRotationSpeed": 10,
 "automaticZoomSpeed": 10,
 "id": "media_470F9969_54DD_AC35_41C1_7C1F4595C005_camera",
 "initialPosition": {
  "hfov": 120,
  "class": "RotationalCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C81DE25_64D8_B120_41B8_BE1368E3F84F"
},
{
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_t.jpg"
  }
 ],
 "label": "captura6",
 "id": "panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD",
 "cardboardMenu": "this.Menu_7AEC1EA5_69AA_14E3_41BF_B6D35F8C9F3F",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_t.jpg",
 "hfov": 360,
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -10.38,
   "class": "AdjacentPanorama",
   "yaw": 133.43,
   "panorama": "this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F"
  }
 ],
 "overlays": [
  "this.overlay_562CF6EF_59FF_7D07_41A9_8DBD06AAA718",
  "this.popup_7611EED7_6447_B16F_41D1_112F9F64B92A",
  "this.overlay_711163B6_6448_9721_41D2_9FC2DFF345FB",
  "this.overlay_71E742E8_6449_B121_41A7_B3E6C410900E",
  "this.panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_tcap0"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_7ADBEEB4_69AA_14E2_41B6_DE5D4F662DE0",
 "levels": [
  {
   "url": "media/popup_777CD79D_6449_9FE3_41BA_EBD1232DF647_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_777CD79D_6449_9FE3_41BA_EBD1232DF647_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_777CD79D_6449_9FE3_41BA_EBD1232DF647_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C9C2E26_64D8_B120_41C3_B04B1EF893B3"
},
{
 "popupMaxWidth": "95%",
 "id": "popup_77DE9676_6449_B120_41D0_A9549A023D0E",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_77DE9676_6449_B120_41D0_A9549A023D0E_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_77DE9676_6449_B120_41D0_A9549A023D0E_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 26.22,
 "hideDuration": 500,
 "rotationX": 0,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "yaw": 60.35,
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 6.86,
 "showEasing": "cubic_in",
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": -147.63,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.63,
  "pitch": -12.48
 },
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "duration": 3000,
   "targetPitch": -12.48
  }
 ]
},
{
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_t.jpg"
  }
 ],
 "label": "captura7",
 "id": "panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F",
 "cardboardMenu": "this.Menu_7AEC1EA5_69AA_14E3_41BF_B6D35F8C9F3F",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_t.jpg",
 "hfov": 360,
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365"
  }
 ],
 "overlays": [
  "this.overlay_57AFDFE2_59F9_CB38_41D5_0D8041D9842C",
  "this.overlay_77F14CF7_6478_912F_41C2_3CE1C0C84AC6",
  "this.overlay_76C8CDDE_6479_F361_41C1_821F9F74CCCF",
  "this.overlay_7103B33A_6447_7720_41D8_5E5274EACAFA",
  "this.panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7A23AED4_69AA_14A1_41CD_542B7E3B7D37",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.15,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_7AE0FEA5_69AA_14E3_41C6_BF67EDD0937C",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7AE0FEA5_69AA_14E3_41C6_BF67EDD0937C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7AE0FEA5_69AA_14E3_41C6_BF67EDD0937C, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_6ABE974F_644B_9F7F_41D3_4A20EC8AAA8D",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_t.jpg"
  }
 ],
 "label": "captura4",
 "id": "panorama_5D14BBF8_5668_E242_4193_5A819379C1D0",
 "cardboardMenu": "this.Menu_7AEC1EA5_69AA_14E3_41BF_B6D35F8C9F3F",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_t.jpg",
 "hfov": 360,
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -170.85,
   "class": "AdjacentPanorama",
   "yaw": -10.78,
   "panorama": "this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_57D16232_59F8_D518_41D3_9D44EE4A0B58",
  "this.overlay_76FDFCC6_6478_9161_41C7_ADF49A41A40A",
  "this.popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99",
  "this.overlay_7703F325_6478_9723_41CC_AAC0D17AB539",
  "this.panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_tcap0"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C81CE24_64D8_B120_41D0_561F151EFD6F",
 "levels": [
  {
   "url": "media/popup_777CD79D_6449_9FE3_41BA_EBD1232DF647_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_777CD79D_6449_9FE3_41BA_EBD1232DF647_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_777CD79D_6449_9FE3_41BA_EBD1232DF647_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7A123ED9_69AA_14A3_41D4_E31D90923FE3",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.62,
  "pitch": 0
 }
},
{
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_74A6A0AC_6458_F120_41C4_137483FF6532.ogg",
  "class": "AudioResource",
  "mp3Url": "media/audio_74A6A0AC_6458_F120_41C4_137483FF6532.mp3"
 },
 "autoplay": true,
 "id": "audio_74A6A0AC_6458_F120_41C4_137483FF6532",
 "data": {
  "label": "transici\u00f3n"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7AC0AEB4_69AA_14E2_41B8_A8EEB6CF4E33",
 "levels": [
  {
   "url": "media/popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7A601F13_69AA_15A7_41C0_FF0E7A3E7F27",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 153.85,
  "pitch": 0
 }
},
{
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_t.jpg"
  }
 ],
 "label": "captura2",
 "id": "panorama_5A3F2AE1_5668_6242_41B9_A67F47943724",
 "cardboardMenu": "this.Menu_7AEC1EA5_69AA_14E3_41BF_B6D35F8C9F3F",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_t.jpg",
 "hfov": 360,
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.96,
   "class": "AdjacentPanorama",
   "yaw": -1.72,
   "panorama": "this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13",
   "distance": 1
  },
  {
   "backwardYaw": -23.27,
   "class": "AdjacentPanorama",
   "yaw": 170.91,
   "panorama": "this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_57C58B60_59E7_CB38_41A2_1ABBD451B26A",
  "this.overlay_49D4106B_59F8_D506_41D5_11A10AD47ED2",
  "this.overlay_6B9230E2_6448_B121_41B0_E5E7BFEE46C5",
  "this.overlay_75C165D5_6458_F360_41D5_338CCFA4A010",
  "this.popup_74C62284_6447_B1E0_418C_D682BEAB7C02",
  "this.popup_777CD79D_6449_9FE3_41BA_EBD1232DF647",
  "this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_tcap0"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C87DE1D_64D8_B0E0_419D_393CBCAFD7E4"
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C9FEE2C_64D8_B120_41CD_2A1DBBDA7149"
},
{
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_t.jpg"
  }
 ],
 "label": "captura5",
 "id": "panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365",
 "cardboardMenu": "this.Menu_7AEC1EA5_69AA_14E3_41BF_B6D35F8C9F3F",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_t.jpg",
 "hfov": 360,
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -26.15,
   "class": "AdjacentPanorama",
   "yaw": 168.85,
   "panorama": "this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.media_470F9969_54DD_AC35_41C1_7C1F4595C005"
  },
  {
   "backwardYaw": 133.43,
   "class": "AdjacentPanorama",
   "yaw": -10.38,
   "panorama": "this.panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.media_73249558_6448_B361_41C0_006BDF213E21"
  }
 ],
 "overlays": [
  "this.overlay_57FFEC4B_59FB_4D0F_4184_B1CA98F324EF",
  "this.overlay_77917997_6479_93EF_41BA_83917986C68A",
  "this.overlay_71051A7F_644F_711F_41C4_2AF647577DD7",
  "this.overlay_72BA9388_6438_97E1_41D1_B745DC733896",
  "this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_tcap0"
 ]
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_6ABE974F_644B_9F7F_41D3_4A20EC8AAA8D_t.jpg",
 "label": "0717",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_6ABE974F_644B_9F7F_41D3_4A20EC8AAA8D",
 "height": 1620,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1620,
  "mp4Url": "media/video_6ABE974F_644B_9F7F_41D3_4A20EC8AAA8D.mp4"
 }
},
{
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_t.jpg"
  }
 ],
 "label": "captura3",
 "id": "panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7",
 "cardboardMenu": "this.Menu_7AEC1EA5_69AA_14E3_41BF_B6D35F8C9F3F",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_t.jpg",
 "hfov": 360,
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 170.91,
   "class": "AdjacentPanorama",
   "yaw": -23.27,
   "panorama": "this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724",
   "distance": 1
  },
  {
   "backwardYaw": -10.78,
   "class": "AdjacentPanorama",
   "yaw": -170.85,
   "panorama": "this.panorama_5D14BBF8_5668_E242_4193_5A819379C1D0",
   "distance": 1
  },
  {
   "backwardYaw": 168.85,
   "class": "AdjacentPanorama",
   "yaw": -26.15,
   "panorama": "this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_57E4EE28_59F9_4D08_41D1_66B2CEA2C5FA",
  "this.popup_77DE9676_6449_B120_41D0_A9549A023D0E",
  "this.overlay_76BA7731_644B_9F23_41CC_113317EF72A5",
  "this.overlay_7737D461_6449_B123_41C5_83B945CD97AA",
  "this.overlay_77DDDE63_6478_F127_41CB_649A4BEA5B09",
  "this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_tcap0"
 ]
},
{
 "class": "PlayList",
 "id": "playList_7AFB5E95_69AA_14A3_41CD_200205159371",
 "items": [
  {
   "class": "Video360PlayListItem",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7AFB5E95_69AA_14A3_41CD_200205159371, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7AFB5E95_69AA_14A3_41CD_200205159371, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
   "media": "this.media_470F9969_54DD_AC35_41C1_7C1F4595C005",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.media_470F9969_54DD_AC35_41C1_7C1F4595C005_camera"
  }
 ]
},
{
 "popupMaxWidth": "95%",
 "id": "popup_74C62284_6447_B1E0_418C_D682BEAB7C02",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_74C62284_6447_B1E0_418C_D682BEAB7C02_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_74C62284_6447_B1E0_418C_D682BEAB7C02_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.06,
 "hideDuration": 500,
 "rotationX": 0,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "yaw": -60.69,
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 5.76,
 "showEasing": "cubic_in",
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "ImageResource",
 "id": "ImageResource_7AC14EB4_69AA_14E2_41A8_797467AE2C55",
 "levels": [
  {
   "url": "media/popup_7611EED7_6447_B16F_41D1_112F9F64B92A_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_7611EED7_6447_B16F_41D1_112F9F64B92A_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_7611EED7_6447_B16F_41D1_112F9F64B92A_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_7AD3EEA5_69AA_14E3_41BA_CAEF639D4ECB",
 "levels": [
  {
   "url": "media/popup_7538E4BE_64C8_9121_41D1_2E4640885CCD_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_7538E4BE_64C8_9121_41D1_2E4640885CCD_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_7538E4BE_64C8_9121_41D1_2E4640885CCD_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C8A4E19_64D8_B0E0_41B1_9FD459DF2657"
},
{
 "class": "ImageResource",
 "id": "ImageResource_7AD9AEB4_69AA_14E2_41C9_D53D64C7D90A",
 "levels": [
  {
   "url": "media/popup_749052C1_64C9_B163_41CC_DAACEEDC243E_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_749052C1_64C9_B163_41CC_DAACEEDC243E_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_749052C1_64C9_B163_41CC_DAACEEDC243E_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_7AFCFE95_69AA_14A3_41D3_07029F9BCF97",
 "items": [
  {
   "class": "Video360PlayListItem",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7AFCFE95_69AA_14A3_41D3_07029F9BCF97, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7AFCFE95_69AA_14A3_41D3_07029F9BCF97, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
   "media": "this.media_73249558_6448_B361_41C0_006BDF213E21",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.media_73249558_6448_B361_41C0_006BDF213E21_camera"
  }
 ]
},
{
 "rollOverFontColor": "#FFFFFF",
 "class": "Menu",
 "fontFamily": "Arial",
 "backgroundColor": "#404040",
 "children": [
  {
   "label": "captura1",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "captura2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "captura3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "captura4",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "captura5",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "captura6",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "captura7",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "label": "Media",
 "fontColor": "#FFFFFF",
 "id": "Menu_7AEC1EA5_69AA_14E3_41BF_B6D35F8C9F3F",
 "selectedFontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "selectedBackgroundColor": "#202020",
 "opacity": 0.4,
 "rollOverOpacity": 0.8
},
{
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_74E23495_644B_71E3_41D5_CB13CB641B13.ogg",
  "class": "AudioResource",
  "mp3Url": "media/audio_74E23495_644B_71E3_41D5_CB13CB641B13.mp3"
 },
 "autoplay": true,
 "id": "audio_74E23495_644B_71E3_41D5_CB13CB641B13",
 "data": {
  "label": "transicion 1"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C9C7E26_64D8_B120_41D6_4C4DB9269475",
 "levels": [
  {
   "url": "media/popup_77DE9676_6449_B120_41D0_A9549A023D0E_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_77DE9676_6449_B120_41D0_A9549A023D0E_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_77DE9676_6449_B120_41D0_A9549A023D0E_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_7AFF0EA5_69AA_14E3_41CF_1B26A8BF2977",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7AFF0EA5_69AA_14E3_41CF_1B26A8BF2977, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7AFF0EA5_69AA_14E3_41CF_1B26A8BF2977, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_447BDC60_54BD_E434_41D3_19AD532B00CC",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7DA0CF61_69AA_1462_418F_5D4DD7DC722A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -11.15,
  "pitch": 0
 }
},
{
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_7126F165_64D9_F323_41D5_CE773A6BA2EA.ogg",
  "class": "AudioResource",
  "mp3Url": "media/audio_7126F165_64D9_F323_41D5_CE773A6BA2EA.mp3"
 },
 "autoplay": true,
 "id": "audio_7126F165_64D9_F323_41D5_CE773A6BA2EA",
 "data": {
  "label": "ambiente peque\u00f1o taller met\u00e1lico"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C8A7E18_64D8_B0E0_41B0_2BC191AB8223",
 "levels": [
  {
   "url": "media/popup_7538E4BE_64C8_9121_41D1_2E4640885CCD_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_7538E4BE_64C8_9121_41D1_2E4640885CCD_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_7538E4BE_64C8_9121_41D1_2E4640885CCD_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C826E25_64D8_B120_41A8_BE076070B946",
 "levels": [
  {
   "url": "media/popup_74C62284_6447_B1E0_418C_D682BEAB7C02_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_74C62284_6447_B1E0_418C_D682BEAB7C02_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_74C62284_6447_B1E0_418C_D682BEAB7C02_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_t.jpg",
   "right": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "captura1",
 "id": "panorama_5AC0A514_5143_68C0_41A3_DB213B302B13",
 "cardboardMenu": "this.Menu_7AEC1EA5_69AA_14E3_41BF_B6D35F8C9F3F",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_t.jpg",
 "hfov": 360,
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.72,
   "class": "AdjacentPanorama",
   "yaw": 1.96,
   "panorama": "this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724",
   "distance": 1
  }
 ],
 "overlays": [
  "this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0",
  "this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_ccap0",
  "this.overlay_56A50E4E_59E9_4D08_41C9_8C5BE215993D",
  "this.overlay_572AAD9B_59E8_CF0F_41CB_D3436047159F",
  "this.overlay_6AC6B459_6449_7163_4185_E358DDD1F35E",
  "this.popup_749052C1_64C9_B163_41CC_DAACEEDC243E",
  "this.popup_7538E4BE_64C8_9121_41D1_2E4640885CCD",
  "this.overlay_75FCBFAD_64C8_8F23_41D5_9A50511B87C3",
  "this.overlay_771201C7_644F_736F_41C4_B6E29CA264F5",
  "this.overlay_7448FFCB_6447_8F67_41C6_6C11DC615E71",
  "this.overlay_7435792F_6458_933F_41C5_5A4648BB9006"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C98FE2E_64D8_B120_41C8_FBD524729735"
},
{
 "popupMaxWidth": "95%",
 "id": "popup_777CD79D_6449_9FE3_41BA_EBD1232DF647",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_777CD79D_6449_9FE3_41BA_EBD1232DF647_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_777CD79D_6449_9FE3_41BA_EBD1232DF647_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -10.57,
 "hideDuration": 500,
 "rotationX": 0,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "yaw": -40,
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 5.69,
 "showEasing": "cubic_in",
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7A71DF03_69AA_15A7_41CD_E0DFC4E72543",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 156.73,
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C9E0E2C_64D8_B120_41B8_2FED03864332",
 "levels": [
  {
   "url": "media/popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7A6F9F22_69AA_15E6_41C4_469A4345F68B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.57,
  "pitch": 0
 }
},
{
 "popupMaxWidth": "95%",
 "id": "popup_7538E4BE_64C8_9121_41D1_2E4640885CCD",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_7538E4BE_64C8_9121_41D1_2E4640885CCD_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_7538E4BE_64C8_9121_41D1_2E4640885CCD_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 15.66,
 "hideDuration": 500,
 "rotationX": 0,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "yaw": -116.66,
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 5.58,
 "showEasing": "cubic_in",
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "popupMaxWidth": "95%",
 "id": "popup_7611EED7_6447_B16F_41D1_112F9F64B92A",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_7611EED7_6447_B16F_41D1_112F9F64B92A_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_7611EED7_6447_B16F_41D1_112F9F64B92A_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 21.69,
 "hideDuration": 500,
 "rotationX": 0,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "yaw": 105.31,
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 7.53,
 "showEasing": "cubic_in",
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "PlayList",
 "id": "playList_7AFF2EA5_69AA_14E3_41D9_BD64CED62087",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7AFF2EA5_69AA_14E3_41D9_BD64CED62087, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7AFF2EA5_69AA_14E3_41D9_BD64CED62087, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_477569AD_54DD_6C0D_41C2_BAF91B5B9354",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_7ADCAEB4_69AA_14E2_41D9_13627330A8C1",
 "levels": [
  {
   "url": "media/popup_74C62284_6447_B1E0_418C_D682BEAB7C02_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_74C62284_6447_B1E0_418C_D682BEAB7C02_1_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_74C62284_6447_B1E0_418C_D682BEAB7C02_1_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7A4F3F52_69AA_15A1_41B3_3F07B659BF2D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.22,
  "pitch": 0
 }
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_447BDC60_54BD_E434_41D3_19AD532B00CC_t.jpg",
 "label": "dance_-_46012 (1080p)",
 "scaleMode": "fit_inside",
 "width": 1920,
 "loop": false,
 "id": "video_447BDC60_54BD_E434_41D3_19AD532B00CC",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_447BDC60_54BD_E434_41D3_19AD532B00CC.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7A410F42_69AA_15A1_41D2_327F995BAD8D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.09,
  "pitch": 0
 }
},
{
 "label": "con obstaculo",
 "id": "media_470F9969_54DD_AC35_41C1_7C1F4595C005",
 "loop": false,
 "pitch": 0,
 "vfov": 180,
 "class": "Video360",
 "hfovMax": 140,
 "thumbnailUrl": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005_t.jpg",
 "hfov": 360,
 "hfovMin": 60,
 "partial": false,
 "video": [
  {
   "width": 2160,
   "url": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005.m3u8",
   "class": "Video360Resource",
   "type": "application/x-mpegurl",
   "posterURL": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005_poster.jpg",
   "framerate": 50,
   "height": 1080
  },
  {
   "width": 2160,
   "url": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005.mp4",
   "class": "Video360Resource",
   "type": "video/mp4",
   "posterURL": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005_poster.jpg",
   "framerate": 50,
   "bitrate": 8748,
   "height": 1080
  }
 ]
},
{
 "label": "sin obstaculo",
 "id": "media_73249558_6448_B361_41C0_006BDF213E21",
 "loop": false,
 "pitch": 0,
 "vfov": 180,
 "class": "Video360",
 "hfovMax": 140,
 "thumbnailUrl": "media/media_73249558_6448_B361_41C0_006BDF213E21_t.jpg",
 "hfov": 360,
 "hfovMin": 60,
 "partial": false,
 "video": [
  {
   "width": 2160,
   "url": "media/media_73249558_6448_B361_41C0_006BDF213E21.m3u8",
   "class": "Video360Resource",
   "type": "application/x-mpegurl",
   "posterURL": "media/media_73249558_6448_B361_41C0_006BDF213E21_poster.jpg",
   "framerate": 50,
   "height": 1080
  },
  {
   "width": 2160,
   "url": "media/media_73249558_6448_B361_41C0_006BDF213E21.mp4",
   "class": "Video360Resource",
   "type": "video/mp4",
   "posterURL": "media/media_73249558_6448_B361_41C0_006BDF213E21_poster.jpg",
   "framerate": 50,
   "bitrate": 8748,
   "height": 1080
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C87CE1D_64D8_B0E0_418F_5616C682AAEB",
 "levels": [
  {
   "url": "media/popup_749052C1_64C9_B163_41CC_DAACEEDC243E_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_749052C1_64C9_B163_41CC_DAACEEDC243E_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_749052C1_64C9_B163_41CC_DAACEEDC243E_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "popupMaxWidth": "95%",
 "id": "popup_749052C1_64C9_B163_41CC_DAACEEDC243E",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_749052C1_64C9_B163_41CC_DAACEEDC243E_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_749052C1_64C9_B163_41CC_DAACEEDC243E_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 7.98,
 "hideDuration": 500,
 "rotationX": 0,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "yaw": -100.27,
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 5.74,
 "showEasing": "cubic_in",
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "popupMaxWidth": "95%",
 "id": "popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99_0_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   },
   {
    "url": "media/popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99_1_1.png",
    "width": 576,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 20.25,
 "hideDuration": 500,
 "rotationX": 0,
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "yaw": 109.15,
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 10.21,
 "showEasing": "cubic_in",
 "showDuration": 500,
 "popupMaxHeight": "95%"
},
{
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_74DAE742_64C8_9F61_41D6_11EF24F673C6.ogg",
  "class": "AudioResource",
  "mp3Url": "media/audio_74DAE742_64C8_9F61_41D6_11EF24F673C6.mp3"
 },
 "autoplay": true,
 "id": "audio_74DAE742_64C8_9F61_41D6_11EF24F673C6",
 "data": {
  "label": "notificacion"
 }
},
{
 "manualZoomSpeed": 1,
 "class": "RotationalCamera",
 "manualRotationSpeed": 1800,
 "automaticRotationSpeed": 10,
 "automaticZoomSpeed": 10,
 "id": "media_73249558_6448_B361_41C0_006BDF213E21_camera",
 "initialPosition": {
  "hfov": 120,
  "class": "RotationalCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C9F1E2E_64D8_B120_41B5_054D4521CED2",
 "levels": [
  {
   "url": "media/popup_7611EED7_6447_B16F_41D1_112F9F64B92A_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_7611EED7_6447_B16F_41D1_112F9F64B92A_0_1.png",
   "width": 576,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_7611EED7_6447_B16F_41D1_112F9F64B92A_0_2.png",
   "width": 288,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "playbackBarHeadShadow": true,
 "id": "MainViewer",
 "toolTipFontStyle": "normal",
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "minHeight": 50,
 "width": "100%",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "toolTipTextShadowHorizontalLength": 0,
 "shadow": false,
 "toolTipTextShadowOpacity": 0.29,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipShadowHorizontalLength": 0,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipTextShadowVerticalLength": 0,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipShadowVerticalLength": 0,
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#009999",
 "height": "100%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "paddingBottom": 0,
 "playbackBarBottom": 5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipPaddingTop": 4,
 "borderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#009999",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBorderColor": "#000000",
 "paddingLeft": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 0.72,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "borderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 26,
 "toolTipPaddingBottom": 4,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontWeight": "normal",
 "vrPointerSelectionTime": 2000,
 "toolTipShadowColor": "#00CC99",
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "progressRight": 0,
 "paddingTop": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 0
},
{
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "layout": "absolute",
 "id": "Container_599C311C_55B8_C90F_41B3_97E7E90FB79D",
 "left": "0%",
 "children": [
  "this.Container_599D911C_55B8_C90F_41C2_D9AAAF6CBB98",
  "this.IconButton_599C011C_55B8_C90F_41D1_373A93BC79BD"
 ],
 "right": "0%",
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadow": false,
 "minWidth": 1,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarColor": "#000000",
 "height": "12.832%",
 "borderSize": 0,
 "class": "Container",
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "--- MENU"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "verticalAlign": "top"
},
{
 "borderRadius": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "right": 0,
 "propagateClick": false,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "shadow": false,
 "minWidth": 0,
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "class": "UIComponent",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent2719"
 },
 "visible": false,
 "backgroundOpacity": 0.55,
 "paddingTop": 0
},
{
 "borderRadius": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "propagateClick": false,
 "minHeight": 0,
 "backgroundColorRatios": [],
 "shadow": false,
 "minWidth": 0,
 "top": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [],
 "borderSize": 0,
 "class": "ZoomImage",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage2720"
 },
 "visible": false,
 "backgroundOpacity": 1,
 "paddingTop": 0
},
{
 "fontFamily": "Arial",
 "borderRadius": 0,
 "layout": "horizontal",
 "id": "closeButtonPopupPanorama",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "shadowSpread": 1,
 "right": 10,
 "propagateClick": false,
 "iconHeight": 20,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadow": false,
 "iconColor": "#000000",
 "fontColor": "#FFFFFF",
 "minWidth": 0,
 "borderColor": "#000000",
 "rollOverIconColor": "#666666",
 "top": 10,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "paddingRight": 5,
 "paddingLeft": 5,
 "backgroundColorDirection": "vertical",
 "label": "",
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "iconLineWidth": 5,
 "borderSize": 0,
 "fontSize": "1.29vmin",
 "fontStyle": "normal",
 "gap": 5,
 "class": "CloseButton",
 "pressedIconColor": "#888888",
 "paddingBottom": 5,
 "shadowBlurRadius": 6,
 "horizontalAlign": "center",
 "data": {
  "name": "CloseButton2721"
 },
 "visible": false,
 "backgroundOpacity": 0.3,
 "verticalAlign": "middle",
 "paddingTop": 5,
 "textDecoration": "none",
 "cursor": "hand",
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_599C011C_55B8_C90F_41D1_373A93BC79BD",
 "iconURL": "skin/IconButton_599C011C_55B8_C90F_41D1_373A93BC79BD.png",
 "width": 49,
 "right": 30,
 "propagateClick": false,
 "minHeight": 1,
 "shadow": false,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 49,
 "maxHeight": 37,
 "bottom": 8,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 37,
 "borderSize": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_599C011C_55B8_C90F_41D1_373A93BC79BD_rollover.png",
 "paddingTop": 0,
 "verticalAlign": "middle"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_7611EED7_6447_B16F_41D1_112F9F64B92A, {'backgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconColor':'#000000','paddingRight':5,'borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, this.ImageResource_7C9F1E2E_64D8_B120_41B5_054D4521CED2, this.ImageResource_7C98FE2E_64D8_B120_41C8_FBD524729735, this.ImageResource_7AC14EB4_69AA_14E2_41A8_797467AE2C55, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true)"
  }
 ],
 "data": {
  "label": "Info Red 04"
 },
 "maps": [
  {
   "hfov": 14.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.69
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_4B5B0F56_5A1B_4B18_41C2_F57C4B5B3BD7",
   "pitch": 21.69,
   "yaw": 105.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.92,
   "distance": 100
  }
 ],
 "id": "overlay_562CF6EF_59FF_7D07_41A9_8DBD06AAA718",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365, this.camera_7A123ED9_69AA_14A3_41D4_E31D90923FE3); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 5, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Arrow 01b"
 },
 "maps": [
  {
   "hfov": 14.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.01
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7CA3DDFC_64D8_B321_41A5_6060D70DC928",
   "pitch": -38.01,
   "yaw": 133.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.87,
   "distance": 100
  }
 ],
 "id": "overlay_711163B6_6448_9721_41D2_9FC2DFF345FB",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 5, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 01b"
 },
 "maps": [
  {
   "hfov": 14.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.41
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7CA37DFC_64D8_B321_41CE_462FD5164737",
   "pitch": -40.41,
   "yaw": -27.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.37,
   "distance": 100
  }
 ],
 "id": "overlay_71E742E8_6449_B121_41A7_B3E6C410900E",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Info Red 04"
 },
 "maps": [
  {
   "hfov": 21.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.3
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_4B5BCF56_5A1B_4B18_41CE_036D70427F87",
   "pitch": 10.3,
   "yaw": -25.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.48,
   "distance": 100
  }
 ],
 "id": "overlay_57AFDFE2_59F9_CB38_41D5_0D8041D9842C",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Almac\u00e9n"
 },
 "maps": [
  {
   "hfov": 24.09,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0_HS_1_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 28.61
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0_HS_1_0.png",
      "width": 463,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 28.61,
   "yaw": -41.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.09,
   "distance": 50
  }
 ],
 "id": "overlay_77F14CF7_6478_912F_41C2_3CE1C0C84AC6",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 6, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)"
  }
 ],
 "data": {
  "label": "Arrow 01b"
 },
 "maps": [
  {
   "hfov": 11.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.88
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7CBCADFD_64D8_B323_41D4_33A3F42C2D91",
   "pitch": -49.88,
   "yaw": 168.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.54,
   "distance": 100
  }
 ],
 "id": "overlay_76C8CDDE_6479_F361_41C1_821F9F74CCCF",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "\u00bfSi has obserbado con atenci\u00f3n?\u000d\u000dsi tu respuesta es SI, socializa con tus compa\u00f1eros e instructor que otros riesgos o peligros viste durante el recorrido."
 },
 "maps": [
  {
   "hfov": 47.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0_HS_3_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.69
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0_HS_3_0.png",
      "width": 833,
      "class": "ImageResourceLevel",
      "height": 698
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.69,
   "yaw": 103.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 47.95,
   "distance": 50
  }
 ],
 "id": "overlay_7103B33A_6447_7720_41D8_5E5274EACAFA",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99, {'backgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconColor':'#000000','paddingRight':5,'borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, this.ImageResource_7C9E0E2C_64D8_B120_41B8_2FED03864332, this.ImageResource_7C9FEE2C_64D8_B120_41CD_2A1DBBDA7149, this.ImageResource_7AC0AEB4_69AA_14E2_41B8_A8EEB6CF4E33, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true)"
  }
 ],
 "data": {
  "label": "Info Red 04"
 },
 "maps": [
  {
   "hfov": 18.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.25
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7CA58DF4_64D8_B321_41C2_9CC437A7A655",
   "pitch": 20.25,
   "yaw": 109.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.16,
   "distance": 100
  }
 ],
 "id": "overlay_57D16232_59F8_D518_41D3_9D44EE4A0B58",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7, this.camera_7A23AED4_69AA_14A1_41CD_542B7E3B7D37); this.mainPlayList.set('selectedIndex', 2); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)"
  }
 ],
 "data": {
  "label": "Arrow 01b"
 },
 "maps": [
  {
   "hfov": 17.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.56
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7CA55DF4_64D8_B321_41D4_97F81811B3F7",
   "pitch": -22.56,
   "yaw": -10.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.43,
   "distance": 100
  }
 ],
 "id": "overlay_76FDFCC6_6478_9161_41C7_ADF49A41A40A",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "\u00c1rea de taller"
 },
 "maps": [
  {
   "hfov": 33.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0_HS_2_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 35.48
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0_HS_2_0.png",
      "width": 686,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 35.48,
   "yaw": -101.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 33.1,
   "distance": 50
  }
 ],
 "id": "overlay_7703F325_6478_9723_41CC_AAC0D17AB539",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_777CD79D_6449_9FE3_41BA_EBD1232DF647, {'backgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconColor':'#000000','paddingRight':5,'borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, this.ImageResource_7C81CE24_64D8_B120_41D0_561F151EFD6F, this.ImageResource_7C81DE25_64D8_B120_41B8_BE1368E3F84F, this.ImageResource_7ADBEEB4_69AA_14E2_41B6_DE5D4F662DE0, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_74DAE742_64C8_9F61_41D6_11EF24F673C6); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)"
  }
 ],
 "data": {
  "label": "Info Red 04"
 },
 "maps": [
  {
   "hfov": 10.12,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.57
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_4B59DF56_5A1B_4B18_41D2_694A5BAE072F",
   "pitch": -10.57,
   "yaw": -40,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.12,
   "distance": 100
  }
 ],
 "id": "overlay_57C58B60_59E7_CB38_41A2_1ABBD451B26A",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_74C62284_6447_B1E0_418C_D682BEAB7C02, {'backgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconColor':'#000000','paddingRight':5,'borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, this.ImageResource_7C826E25_64D8_B120_41A8_BE076070B946, this.ImageResource_7C824E25_64D8_B120_41AA_B993630C7CED, this.ImageResource_7ADCAEB4_69AA_14E2_41D9_13627330A8C1, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_74DAE742_64C8_9F61_41D6_11EF24F673C6); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)"
  }
 ],
 "data": {
  "label": "Info Red 04"
 },
 "maps": [
  {
   "hfov": 10.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.06
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_4B59BF56_5A1B_4B18_41D3_C0C1099B7142",
   "pitch": 6.06,
   "yaw": -60.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.24,
   "distance": 100
  }
 ],
 "id": "overlay_49D4106B_59F8_D506_41D5_11A10AD47ED2",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13, this.camera_7A018EE4_69AA_1461_41D7_1015034FB2AD); this.mainPlayList.set('selectedIndex', 0); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "maps": [
  {
   "hfov": 17.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.5
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7CAB9DF3_64D8_B327_41D6_ABE113925D0E",
   "pitch": -22.5,
   "yaw": -1.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.44,
   "distance": 100
  }
 ],
 "id": "overlay_6B9230E2_6448_B121_41B0_E5E7BFEE46C5",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7, this.camera_7A71DF03_69AA_15A7_41CD_E0DFC4E72543); this.mainPlayList.set('selectedIndex', 2); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "maps": [
  {
   "hfov": 14.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.65
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7CAB2DF4_64D8_B321_41C2_E712D74CE492",
   "pitch": -39.65,
   "yaw": 170.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.53,
   "distance": 100
  }
 ],
 "id": "overlay_75C165D5_6458_F360_41D5_338CCFA4A010",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setMediaBehaviour(this.playList_7AFB5E95_69AA_14A3_41CD_200205159371, 0, this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365); this.MainViewerPanoramaPlayer.play()"
  }
 ],
 "data": {
  "label": "Info Red 04"
 },
 "maps": [
  {
   "hfov": 20.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.08
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7CA6ADF5_64D8_B323_41C3_36C6380B8EC2",
   "pitch": 11.08,
   "yaw": -10.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.61,
   "distance": 100
  }
 ],
 "id": "overlay_57FFEC4B_59FB_4D0F_4184_B1CA98F324EF",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "\u00c1rea administrativa"
 },
 "maps": [
  {
   "hfov": 30.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_1_0_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 56.75
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_1_0.png",
      "width": 939,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 56.75,
   "yaw": -11.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.51,
   "distance": 50
  }
 ],
 "id": "overlay_77917997_6479_93EF_41BA_83917986C68A",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setMediaBehaviour(this.playList_7AFCFE95_69AA_14A3_41D3_07029F9BCF97, 0, this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365); this.MainViewerPanoramaPlayer.play(); this.mainPlayList.set('selectedIndex', 5); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "maps": [
  {
   "hfov": 13.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -62.58
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7CA36DFB_64D8_B326_4176_7B8D9057D072",
   "pitch": -62.58,
   "yaw": -10.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.87,
   "distance": 100
  }
 ],
 "id": "overlay_71051A7F_644F_711F_41C4_2AF647577DD7",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7, this.camera_7A601F13_69AA_15A7_41C0_FF0E7A3E7F27); this.mainPlayList.set('selectedIndex', 2); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "maps": [
  {
   "hfov": 9.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -52.86
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7FB9B9B4_643F_7320_41D0_3B11174301A6",
   "pitch": -52.86,
   "yaw": 168.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.32,
   "distance": 100
  }
 ],
 "id": "overlay_72BA9388_6438_97E1_41D1_B745DC733896",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_77DE9676_6449_B120_41D0_A9549A023D0E, {'backgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconColor':'#000000','paddingRight':5,'borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, this.ImageResource_7C9C7E26_64D8_B120_41D6_4C4DB9269475, this.ImageResource_7C9C2E26_64D8_B120_41C3_B04B1EF893B3, this.ImageResource_7ADE8EB4_69AA_14E2_41C4_456F1CDA135E, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true)"
  }
 ],
 "data": {
  "label": "Info Red 04"
 },
 "maps": [
  {
   "hfov": 15.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_4B587F56_5A1B_4B18_41C9_D5930001BEED",
   "pitch": 26.22,
   "yaw": 60.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.64,
   "distance": 100
  }
 ],
 "id": "overlay_57E4EE28_59F9_4D08_41D1_66B2CEA2C5FA",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724, this.camera_7A410F42_69AA_15A1_41D2_327F995BAD8D); this.mainPlayList.set('selectedIndex', 1); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "maps": [
  {
   "hfov": 17.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.76
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7CA46DF4_64D8_B321_41D7_75DA3A4A96C1",
   "pitch": -24.76,
   "yaw": -23.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.14,
   "distance": 100
  }
 ],
 "id": "overlay_76BA7731_644B_9F23_41CC_113317EF72A5",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365, this.camera_7DA0CF61_69AA_1462_418F_5D4DD7DC722A); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Arrow Transparent Left"
 },
 "maps": [
  {
   "hfov": 7.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.33
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.86,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0_HS_2_0.png",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.33,
   "yaw": -26.15
  }
 ],
 "id": "overlay_7737D461_6449_B123_41C5_83B945CD97AA",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5D14BBF8_5668_E242_4193_5A819379C1D0, this.camera_7A4F3F52_69AA_15A1_41B3_3F07B659BF2D); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "maps": [
  {
   "hfov": 13.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.67
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7CA5EDF4_64D8_B321_41B6_939F2333E890",
   "pitch": -44.67,
   "yaw": -170.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.42,
   "distance": 100
  }
 ],
 "id": "overlay_77DDDE63_6478_F127_41CB_649A4BEA5B09",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_tcap0",
 "distance": 50
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0",
 "distance": 50
},
{
 "inertia": false,
 "class": "CeilingCapPanoramaOverlay",
 "angle": 180,
 "image": {
  "levels": [
   {
    "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_ccap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_ccap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_7538E4BE_64C8_9121_41D1_2E4640885CCD, {'backgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconColor':'#000000','paddingRight':5,'borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, this.ImageResource_7C8A7E18_64D8_B0E0_41B0_2BC191AB8223, this.ImageResource_7C8A4E19_64D8_B0E0_41B1_9FD459DF2657, this.ImageResource_7AD3EEA5_69AA_14E3_41BA_CAEF639D4ECB, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_74DAE742_64C8_9F61_41D6_11EF24F673C6); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)"
  }
 ],
 "data": {
  "label": "Info Red 04"
 },
 "maps": [
  {
   "hfov": 9.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.66
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_4B56CF56_5A1B_4B18_41B4_792FD2A6869C",
   "pitch": 15.66,
   "yaw": -116.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.91,
   "distance": 100
  }
 ],
 "id": "overlay_56A50E4E_59E9_4D08_41C9_8C5BE215993D",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_749052C1_64C9_B163_41CC_DAACEEDC243E, {'backgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconColor':'#000000','paddingRight':5,'borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, this.ImageResource_7C87CE1D_64D8_B0E0_418F_5616C682AAEB, this.ImageResource_7C87DE1D_64D8_B0E0_419D_393CBCAFD7E4, this.ImageResource_7AD9AEB4_69AA_14E2_41C9_D53D64C7D90A, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_74DAE742_64C8_9F61_41D6_11EF24F673C6); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)"
  }
 ],
 "data": {
  "label": "Info Red 04"
 },
 "maps": [
  {
   "hfov": 10.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.98
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_4B56BF56_5A1B_4B18_41D6_88EEBA8DA826",
   "pitch": 7.98,
   "yaw": -100.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.2,
   "distance": 100
  }
 ],
 "id": "overlay_572AAD9B_59E8_CF0F_41CB_D3436047159F",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "id": "overlay_6AC6B459_6449_7163_4185_E358DDD1F35E",
 "blending": 0,
 "loop": false,
 "pitch": -4.34,
 "videoVisibleOnStop": false,
 "useHandCursor": true,
 "roll": -3.54,
 "yaw": 30.66,
 "enabledInCardboard": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_6AC6B459_6449_7163_4185_E358DDD1F35E_t.jpg",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1620
   }
  ],
  "class": "ImageResource"
 },
 "rotationY": -0.83,
 "class": "VideoPanoramaOverlay",
 "rotationX": 4.39,
 "chromaSmoothing": 0.2,
 "hfov": 26.61,
 "chromaColor": "#0099FF",
 "chromaThreshold": 0.19,
 "distance": 50,
 "vfov": 61.7,
 "autoplay": false,
 "click": "this.overlay_6AC6B459_6449_7163_4185_E358DDD1F35E.play()",
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 784,
  "class": "VideoResource",
  "height": 1176,
  "mp4Url": "media/video_6AD51E38_6448_F121_41C2_7C4255C5B257.mp4"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "TE DAMOS LA BIENVENIDA"
 },
 "maps": [
  {
   "hfov": 51.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_5_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 61.03
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_5_0.png",
      "width": 1779,
      "class": "ImageResourceLevel",
      "height": 267
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 61.03,
   "yaw": 12.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 51.02,
   "distance": 50
  }
 ],
 "id": "overlay_75FCBFAD_64C8_8F23_41D5_9A50511B87C3",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Observa tu entorno, tomate el tiempo que necesites para leer y comprender el contexto del tour."
 },
 "maps": [
  {
   "hfov": 45.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_6_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.3
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_6_0.png",
      "width": 833,
      "class": "ImageResourceLevel",
      "height": 430
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.3,
   "yaw": 103.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 45.98,
   "distance": 50
  }
 ],
 "id": "overlay_771201C7_644F_736F_41C4_B6E29CA264F5",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "\u00c1rea de lavado"
 },
 "maps": [
  {
   "hfov": 36.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_7_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 27.24
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_7_0.png",
      "width": 686,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 27.24,
   "yaw": -66.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 36.14,
   "distance": 50
  }
 ],
 "id": "overlay_7448FFCB_6447_8F67_41C6_6C11DC615E71",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724, this.camera_7A35AEC4_69AA_14A1_41B2_E3716B599E18); this.mainPlayList.set('selectedIndex', 1); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)"
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "maps": [
  {
   "hfov": 12.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_8_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.57
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7CAA5DF3_64D8_B327_41D7_EDAF3F0938E3",
   "pitch": -27.57,
   "yaw": 1.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.54,
   "distance": 100
  }
 ],
 "id": "overlay_7435792F_6458_933F_41C5_5A4648BB9006",
 "enabledInCardboard": true,
 "rollOverDisplay": false
},
{
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "id": "Container_599D911C_55B8_C90F_41C2_D9AAAF6CBB98",
 "left": "0%",
 "width": 1199,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "shadow": false,
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 30,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "scrollBarColor": "#000000",
 "height": 51,
 "borderSize": 0,
 "class": "Container",
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-button set container"
 },
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "verticalAlign": "middle"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_1_HS_1_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B5B0F56_5A1B_4B18_41C2_F57C4B5B3BD7",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_7CA3DDFC_64D8_B321_41A5_6060D70DC928",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_7CA37DFC_64D8_B321_41CE_462FD5164737",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_1_HS_0_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B5BCF56_5A1B_4B18_41CE_036D70427F87",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_7CBCADFD_64D8_B323_41D4_33A3F42C2D91",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0_HS_0_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CA58DF4_64D8_B321_41C2_9CC437A7A655",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_7CA55DF4_64D8_B321_41D4_97F81811B3F7",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_1_HS_0_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B59DF56_5A1B_4B18_41D2_694A5BAE072F",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_1_HS_1_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B59BF56_5A1B_4B18_41D3_C0C1099B7142",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_7CAB9DF3_64D8_B327_41D6_ABE113925D0E",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_7CAB2DF4_64D8_B321_41C2_E712D74CE492",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_0_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CA6ADF5_64D8_B323_41C3_36C6380B8EC2",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_7CA36DFB_64D8_B326_4176_7B8D9057D072",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_4_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_7FB9B9B4_643F_7320_41D0_3B11174301A6",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_1_HS_0_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B587F56_5A1B_4B18_41C9_D5930001BEED",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_7CA46DF4_64D8_B321_41D7_75DA3A4A96C1",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_7CA5EDF4_64D8_B321_41B6_939F2333E890",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_1_HS_3_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B56CF56_5A1B_4B18_41B4_792FD2A6869C",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_1_HS_4_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_4B56BF56_5A1B_4B18_41D6_88EEBA8DA826",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_8_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_7CAA5DF3_64D8_B327_41D7_EDAF3F0938E3",
 "frameCount": 9,
 "rowCount": 3
}],
 "children": [
  "this.MainViewer",
  "this.Container_599C311C_55B8_C90F_41B3_97E7E90FB79D",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "downloadEnabled": false,
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "overflow": "visible",
 "defaultVRPointer": "laser",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "height": "100%",
 "gap": 10,
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; }
 },
 "class": "Player",
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Player435"
 },
 "paddingTop": 0,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
