(function(){
    var script = {
 "definitions": [{
 "id": "ImageResource_7C8A7E18_64D8_B0E0_41B0_2BC191AB8223",
 "class": "ImageResource",
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
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -9.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F9BC9D3_643F_7367_41C5_9776FE11680B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_7C9C3E26_64D8_B120_41D6_C8DF27C27C02",
 "class": "ImageResource",
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
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C98FE2E_64D8_B120_41C8_FBD524729735"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -10.78,
   "backwardYaw": -170.85,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5D14BBF8_5668_E242_4193_5A819379C1D0",
 "thumbnailUrl": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_t.jpg",
 "label": "captura4",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_7FB2E9B4_643F_7320_4181_6242B812E8D2",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_57D16232_59F8_D518_41D3_9D44EE4A0B58",
  "this.overlay_76FDFCC6_6478_9161_41C7_ADF49A41A40A",
  "this.popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99",
  "this.overlay_7703F325_6478_9723_41CC_AAC0D17AB539"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_camera"
  },
  {
   "media": "this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_camera"
  },
  {
   "media": "this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_camera"
  },
  {
   "media": "this.panorama_5D14BBF8_5668_E242_4193_5A819379C1D0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_camera"
  },
  {
   "media": "this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_camera"
  },
  {
   "media": "this.panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 5)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_camera"
  },
  {
   "media": "this.panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 6)",
   "camera": "this.panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_477569AD_54DD_6C0D_41C2_BAF91B5B9354",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7FBBE9B4_643F_7320_41C1_C0276C1D4BFD, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7FBBE9B4_643F_7320_41C1_C0276C1D4BFD, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_7FBBE9B4_643F_7320_41C1_C0276C1D4BFD",
 "class": "PlayList"
},
{
 "id": "ImageResource_7C9FFE2C_64D8_B120_41C8_08B135F4B769",
 "class": "ImageResource",
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
 "id": "popup_7538E4BE_64C8_9121_41D1_2E4640885CCD",
 "hfov": 5.58,
 "class": "PopupPanoramaOverlay",
 "yaw": -116.66,
 "image": {
  "class": "ImageResource",
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
  ]
 },
 "pitch": 15.66,
 "rotationY": 0,
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F162A80_643F_71E0_41D4_EED642D41B7F",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": -147.63,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -147.63,
  "class": "PanoramaCameraPosition",
  "pitch": -12.48
 },
 "id": "panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": -12.48,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000
  }
 ],
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_447BDC60_54BD_E434_41D3_19AD532B00CC",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7FBBB9B4_643F_7320_41C3_10F239905EA2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7FBBB9B4_643F_7320_41C3_10F239905EA2, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_7FBBB9B4_643F_7320_41C3_10F239905EA2",
 "class": "PlayList"
},
{
 "id": "ImageResource_7C98AE2E_64D8_B120_41A8_89AF77757309",
 "class": "ImageResource",
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
 "adjacentPanoramas": [
  {
   "yaw": 133.43,
   "backwardYaw": -10.38,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD",
 "thumbnailUrl": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_t.jpg",
 "label": "captura6",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_7FB2E9B4_643F_7320_4181_6242B812E8D2",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_562CF6EF_59FF_7D07_41A9_8DBD06AAA718",
  "this.popup_7611EED7_6447_B16F_41D1_112F9F64B92A",
  "this.overlay_711163B6_6448_9721_41D2_9FC2DFF345FB",
  "this.overlay_71E742E8_6449_B121_41A7_B3E6C410900E"
 ]
},
{
 "id": "ImageResource_7C8A3E19_64D8_B0E0_41D6_1C89D8FC1854",
 "class": "ImageResource",
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
 "adjacentPanoramas": [
  {
   "yaw": -23.27,
   "backwardYaw": 170.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724",
   "distance": 1
  },
  {
   "yaw": -170.85,
   "backwardYaw": -10.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D14BBF8_5668_E242_4193_5A819379C1D0",
   "distance": 1
  },
  {
   "yaw": -26.15,
   "backwardYaw": 168.85,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7",
 "thumbnailUrl": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_t.jpg",
 "label": "captura3",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_7FB2E9B4_643F_7320_4181_6242B812E8D2",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_57E4EE28_59F9_4D08_41D1_66B2CEA2C5FA",
  "this.popup_77DE9676_6449_B120_41D0_A9549A023D0E",
  "this.overlay_76BA7731_644B_9F23_41CC_113317EF72A5",
  "this.overlay_7737D461_6449_B123_41C5_83B945CD97AA",
  "this.overlay_77DDDE63_6478_F127_41CB_649A4BEA5B09"
 ]
},
{
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "label": "captura1",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "captura2",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "captura3",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "captura4",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "captura5",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "captura6",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "captura7",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "id": "Menu_7FB2E9B4_643F_7320_4181_6242B812E8D2",
 "rollOverOpacity": 0.8,
 "class": "Menu",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "backgroundColor": "#404040",
 "selectedBackgroundColor": "#202020",
 "opacity": 0.4
},
{
 "id": "ImageResource_7C87AE1D_64D8_B0E0_4153_5F2FC5F7E8F3",
 "class": "ImageResource",
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
 "items": [
  {
   "media": "this.media_470F9969_54DD_AC35_41C1_7C1F4595C005",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7FB8E9B4_643F_7320_41D7_1F531510E258, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7FB8E9B4_643F_7320_41D7_1F531510E258, 0)",
   "class": "Video360PlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
   "camera": "this.media_470F9969_54DD_AC35_41C1_7C1F4595C005_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "playList_7FB8E9B4_643F_7320_41D7_1F531510E258",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "RotationalCamera",
 "automaticRotationSpeed": 10,
 "id": "media_470F9969_54DD_AC35_41C1_7C1F4595C005_camera",
 "manualZoomSpeed": 1,
 "manualRotationSpeed": 1800,
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "RotationalCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FF3DA02_643F_70E1_41D8_748129880B06",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F",
 "thumbnailUrl": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_t.jpg",
 "label": "captura7",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_7FB2E9B4_643F_7320_4181_6242B812E8D2",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_57AFDFE2_59F9_CB38_41D5_0D8041D9842C",
  "this.overlay_77F14CF7_6478_912F_41C2_3CE1C0C84AC6",
  "this.overlay_76C8CDDE_6479_F361_41C1_821F9F74CCCF",
  "this.overlay_7103B33A_6447_7720_41D8_5E5274EACAFA"
 ]
},
{
 "items": [
  {
   "media": "this.video_6AD51E38_6448_F121_41C2_7C4255C5B257",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7FBB49B4_643F_7320_41BE_D2F1DEFDD799, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7FBB49B4_643F_7320_41BE_D2F1DEFDD799, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_7FBB49B4_643F_7320_41BE_D2F1DEFDD799",
 "class": "PlayList"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_7126F165_64D9_F323_41D5_CE773A6BA2EA.mp3",
  "oggUrl": "media/audio_7126F165_64D9_F323_41D5_CE773A6BA2EA.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_7126F165_64D9_F323_41D5_CE773A6BA2EA",
 "data": {
  "label": "ambiente peque\u00f1o taller met\u00e1lico"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_74DAE742_64C8_9F61_41D6_11EF24F673C6.mp3",
  "oggUrl": "media/audio_74DAE742_64C8_9F61_41D6_11EF24F673C6.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_74DAE742_64C8_9F61_41D6_11EF24F673C6",
 "data": {
  "label": "notificacion"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 170.91,
   "backwardYaw": -23.27,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7",
   "distance": 1
  },
  {
   "yaw": -1.72,
   "backwardYaw": 1.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5A3F2AE1_5668_6242_41B9_A67F47943724",
 "thumbnailUrl": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_t.jpg",
 "label": "captura2",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_7FB2E9B4_643F_7320_4181_6242B812E8D2",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_57C58B60_59E7_CB38_41A2_1ABBD451B26A",
  "this.overlay_49D4106B_59F8_D506_41D5_11A10AD47ED2",
  "this.overlay_6B9230E2_6448_B121_41B0_E5E7BFEE46C5",
  "this.overlay_75C165D5_6458_F360_41D5_338CCFA4A010",
  "this.popup_74C62284_6447_B1E0_418C_D682BEAB7C02",
  "this.popup_777CD79D_6449_9FE3_41BA_EBD1232DF647"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C9C2E26_64D8_B120_41C3_B04B1EF893B3"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 156.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FD1BA31_643F_7123_41C3_64241E60FF30",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_74A6A0AC_6458_F120_41C4_137483FF6532.mp3",
  "oggUrl": "media/audio_74A6A0AC_6458_F120_41C4_137483FF6532.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_74A6A0AC_6458_F120_41C4_137483FF6532",
 "data": {
  "label": "transici\u00f3n"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C9FEE2C_64D8_B120_41CD_2A1DBBDA7149"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 168.85,
   "backwardYaw": -26.15,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.media_73249558_6448_B361_41C0_006BDF213E21"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.media_470F9969_54DD_AC35_41C1_7C1F4595C005"
  },
  {
   "yaw": -10.38,
   "backwardYaw": 133.43,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365",
 "thumbnailUrl": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_t.jpg",
 "label": "captura5",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_7FB2E9B4_643F_7320_4181_6242B812E8D2",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_57FFEC4B_59FB_4D0F_4184_B1CA98F324EF",
  "this.overlay_77917997_6479_93EF_41BA_83917986C68A",
  "this.overlay_71051A7F_644F_711F_41C4_2AF647577DD7",
  "this.overlay_72BA9388_6438_97E1_41D1_B745DC733896"
 ]
},
{
 "label": "dance_-_46012 (1080p)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_447BDC60_54BD_E434_41D3_19AD532B00CC_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_447BDC60_54BD_E434_41D3_19AD532B00CC",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_447BDC60_54BD_E434_41D3_19AD532B00CC.mp4"
 }
},
{
 "id": "ImageResource_7C826E25_64D8_B120_41A8_BE076070B946",
 "class": "ImageResource",
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
 "id": "ImageResource_7C9F1E2E_64D8_B120_41B5_054D4521CED2",
 "class": "ImageResource",
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
 "id": "popup_74C62284_6447_B1E0_418C_D682BEAB7C02",
 "hfov": 5.76,
 "class": "PopupPanoramaOverlay",
 "yaw": -60.69,
 "image": {
  "class": "ImageResource",
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
  ]
 },
 "pitch": 6.06,
 "rotationY": 0,
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "id": "ImageResource_7C9E0E2C_64D8_B120_41B8_2FED03864332",
 "class": "ImageResource",
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
 "hfovMin": 60,
 "partial": false,
 "id": "media_470F9969_54DD_AC35_41C1_7C1F4595C005",
 "thumbnailUrl": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005_t.jpg",
 "hfov": 360,
 "label": "con obstaculo",
 "loop": false,
 "class": "Video360",
 "pitch": 0,
 "hfovMax": 140,
 "vfov": 180,
 "video": [
  {
   "width": 2160,
   "posterURL": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005_poster.jpg",
   "class": "Video360Resource",
   "framerate": 50,
   "type": "application/x-mpegurl",
   "url": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005.m3u8",
   "height": 1080
  },
  {
   "width": 2160,
   "posterURL": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005_poster.jpg",
   "class": "Video360Resource",
   "framerate": 50,
   "bitrate": 8748,
   "type": "video/mp4",
   "url": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005.mp4",
   "height": 1080
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 153.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F365A5A_643F_7161_41D3_BFE8EDC5F1B2",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_74E23495_644B_71E3_41D5_CB13CB641B13.mp3",
  "oggUrl": "media/audio_74E23495_644B_71E3_41D5_CB13CB641B13.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_74E23495_644B_71E3_41D5_CB13CB641B13",
 "data": {
  "label": "transicion 1"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "popup_7611EED7_6447_B16F_41D1_112F9F64B92A",
 "hfov": 7.53,
 "class": "PopupPanoramaOverlay",
 "yaw": 105.31,
 "image": {
  "class": "ImageResource",
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
  ]
 },
 "pitch": 21.69,
 "rotationY": 0,
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "id": "popup_77DE9676_6449_B120_41D0_A9549A023D0E",
 "hfov": 6.86,
 "class": "PopupPanoramaOverlay",
 "yaw": 60.35,
 "image": {
  "class": "ImageResource",
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
  ]
 },
 "pitch": 26.22,
 "rotationY": 0,
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "id": "popup_749052C1_64C9_B163_41CC_DAACEEDC243E",
 "hfov": 5.74,
 "class": "PopupPanoramaOverlay",
 "yaw": -100.27,
 "image": {
  "class": "ImageResource",
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
  ]
 },
 "pitch": 7.98,
 "rotationY": 0,
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "label": "con obstaculo",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_477569AD_54DD_6C0D_41C2_BAF91B5B9354_t.jpg",
 "width": 2160,
 "loop": false,
 "id": "video_477569AD_54DD_6C0D_41C2_BAF91B5B9354",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 2160,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_477569AD_54DD_6C0D_41C2_BAF91B5B9354.mp4"
 }
},
{
 "id": "ImageResource_7C81BE25_64D8_B120_41C1_DE90BA7CA0C3",
 "class": "ImageResource",
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
 "id": "popup_777CD79D_6449_9FE3_41BA_EBD1232DF647",
 "hfov": 5.69,
 "class": "PopupPanoramaOverlay",
 "yaw": -40,
 "image": {
  "class": "ImageResource",
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
  ]
 },
 "pitch": -10.57,
 "rotationY": 0,
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C81DE25_64D8_B120_41B8_BE1368E3F84F"
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_599C011C_55B8_C90F_41D1_373A93BC79BD",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 169.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FE3AA21_643F_7123_41D0_E65B82FBDD4E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 169.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F8E09D3_643F_7367_41D1_FF49B7CEEB02",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C87DE1D_64D8_B0E0_419D_393CBCAFD7E4"
},
{
 "items": [
  {
   "media": "this.media_73249558_6448_B361_41C0_006BDF213E21",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7FB9A9B4_643F_7320_41BC_78F4399D2827, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7FB9A9B4_643F_7320_41BC_78F4399D2827, 0)",
   "class": "Video360PlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
   "camera": "this.media_73249558_6448_B361_41C0_006BDF213E21_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "playList_7FB9A9B4_643F_7320_41BC_78F4399D2827",
 "class": "PlayList"
},
{
 "id": "ImageResource_7C9C7E26_64D8_B120_41D6_4C4DB9269475",
 "class": "ImageResource",
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
 "id": "ImageResource_7C87CE1D_64D8_B0E0_418F_5616C682AAEB",
 "class": "ImageResource",
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
 "id": "ImageResource_7C825E25_64D8_B120_41CB_AAA51762939B",
 "class": "ImageResource",
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
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -11.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FFDF9F6_643F_7320_41D0_857D6299B69D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMin": 60,
 "partial": false,
 "id": "media_73249558_6448_B361_41C0_006BDF213E21",
 "thumbnailUrl": "media/media_73249558_6448_B361_41C0_006BDF213E21_t.jpg",
 "hfov": 360,
 "label": "sin obstaculo",
 "loop": false,
 "class": "Video360",
 "pitch": 0,
 "hfovMax": 140,
 "vfov": 180,
 "video": [
  {
   "width": 2160,
   "posterURL": "media/media_73249558_6448_B361_41C0_006BDF213E21_poster.jpg",
   "class": "Video360Resource",
   "framerate": 50,
   "type": "application/x-mpegurl",
   "url": "media/media_73249558_6448_B361_41C0_006BDF213E21.m3u8",
   "height": 1080
  },
  {
   "width": 2160,
   "posterURL": "media/media_73249558_6448_B361_41C0_006BDF213E21_poster.jpg",
   "class": "Video360Resource",
   "framerate": 50,
   "bitrate": 8748,
   "type": "video/mp4",
   "url": "media/media_73249558_6448_B361_41C0_006BDF213E21.mp4",
   "height": 1080
  }
 ]
},
{
 "id": "popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99",
 "hfov": 10.21,
 "class": "PopupPanoramaOverlay",
 "yaw": 109.15,
 "image": {
  "class": "ImageResource",
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
  ]
 },
 "pitch": 20.25,
 "rotationY": 0,
 "rotationX": 0,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "automaticZoomSpeed": 10,
 "class": "RotationalCamera",
 "automaticRotationSpeed": 10,
 "id": "media_73249558_6448_B361_41C0_006BDF213E21_camera",
 "manualZoomSpeed": 1,
 "manualRotationSpeed": 1800,
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "RotationalCameraPosition",
  "pitch": 0
 }
},
{
 "label": "0717(1)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_6AD51E38_6448_F121_41C2_7C4255C5B257_t.jpg",
 "width": 1080,
 "loop": false,
 "id": "video_6AD51E38_6448_F121_41C2_7C4255C5B257",
 "class": "Video",
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
 "id": "ImageResource_7C8A4E19_64D8_B0E0_41B1_9FD459DF2657"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_7C81CE24_64D8_B120_41D0_561F151EFD6F",
 "class": "ImageResource",
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
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -46.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7F265A70_643F_7121_4192_70397D12DDF9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "0717",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_6ABE974F_644B_9F7F_41D3_4A20EC8AAA8D_t.jpg",
 "width": 1080,
 "loop": false,
 "id": "video_6ABE974F_644B_9F7F_41D3_4A20EC8AAA8D",
 "class": "Video",
 "height": 1620,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "height": 1620,
  "mp4Url": "media/video_6ABE974F_644B_9F7F_41D3_4A20EC8AAA8D.mp4"
 }
},
{
 "class": "ImageResource",
 "id": "ImageResource_7C824E25_64D8_B120_41AA_B993630C7CED"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7FC07A41_643F_7160_41D0_9E054CABAC5E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 1.96,
   "backwardYaw": -1.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "id": "panorama_5AC0A514_5143_68C0_41A3_DB213B302B13",
 "thumbnailUrl": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_t.jpg",
 "label": "captura1",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_7FB2E9B4_643F_7320_4181_6242B812E8D2",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_t.jpg"
  }
 ],
 "vfov": 180,
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
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_6ABE974F_644B_9F7F_41D3_4A20EC8AAA8D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7FBB29B4_643F_7320_41CA_9682DD419B19, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7FBB29B4_643F_7320_41CA_9682DD419B19, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_7FBB29B4_643F_7320_41CA_9682DD419B19",
 "class": "PlayList"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#009999",
 "class": "ViewerArea",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 0.72,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 26,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#00CC99",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0.29,
 "toolTipTextShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#009999",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--- MENU"
 },
 "children": [
  "this.Container_599D911C_55B8_C90F_41C2_D9AAAF6CBB98",
  "this.IconButton_599C011C_55B8_C90F_41D1_373A93BC79BD"
 ],
 "layout": "absolute",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_599C311C_55B8_C90F_41B3_97E7E90FB79D",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": "12.832%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "class": "UIComponent",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent37697"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "class": "ZoomImage",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage37698"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton37699"
 },
 "layout": "horizontal",
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "horizontalAlign": "center",
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 10,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "minWidth": 0,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "paddingLeft": 5,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "top": 10,
 "label": "",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.16,
   "image": "this.AnimatedImageResource_7CA58DF4_64D8_B321_41C2_9CC437A7A655",
   "pitch": 20.25,
   "yaw": 109.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_77C7C7BB_6478_FF27_41C9_5F9FF694CE99, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_7C9E0E2C_64D8_B120_41B8_2FED03864332, this.ImageResource_7C9FEE2C_64D8_B120_41CD_2A1DBBDA7149, this.ImageResource_7C9FFE2C_64D8_B120_41C8_08B135F4B769, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_57D16232_59F8_D518_41D3_9D44EE4A0B58",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.16,
   "yaw": 109.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 20.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.43,
   "image": "this.AnimatedImageResource_7CA55DF4_64D8_B321_41D4_97F81811B3F7",
   "pitch": -22.56,
   "yaw": -10.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7, this.camera_7FF3DA02_643F_70E1_41D8_748129880B06); this.mainPlayList.set('selectedIndex', 2); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_76FDFCC6_6478_9161_41C7_ADF49A41A40A",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.43,
   "yaw": -10.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "\u00c1rea de taller"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 33.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0_HS_2_0.png",
      "width": 686,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ]
   },
   "pitch": 35.48,
   "yaw": -101.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7703F325_6478_9723_41CC_AAC0D17AB539",
 "maps": [
  {
   "hfov": 33.1,
   "yaw": -101.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 35.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0_HS_2_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.92,
   "image": "this.AnimatedImageResource_4B5B0F56_5A1B_4B18_41C2_F57C4B5B3BD7",
   "pitch": 21.69,
   "yaw": 105.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_7611EED7_6447_B16F_41D1_112F9F64B92A, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_7C9F1E2E_64D8_B120_41B5_054D4521CED2, this.ImageResource_7C98FE2E_64D8_B120_41C8_FBD524729735, this.ImageResource_7C98AE2E_64D8_B120_41A8_89AF77757309, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_562CF6EF_59FF_7D07_41A9_8DBD06AAA718",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.92,
   "yaw": 105.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 21.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.87,
   "image": "this.AnimatedImageResource_7CA3DDFC_64D8_B321_41A5_6060D70DC928",
   "pitch": -38.01,
   "yaw": 133.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365, this.camera_7FE3AA21_643F_7123_41D0_E65B82FBDD4E); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 5, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_711163B6_6448_9721_41D2_9FC2DFF345FB",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.87,
   "yaw": 133.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.37,
   "image": "this.AnimatedImageResource_7CA37DFC_64D8_B321_41CE_462FD5164737",
   "pitch": -40.41,
   "yaw": -27.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 5, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_71E742E8_6449_B121_41A7_B3E6C410900E",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.37,
   "yaw": -27.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.64,
   "image": "this.AnimatedImageResource_4B587F56_5A1B_4B18_41C9_D5930001BEED",
   "pitch": 26.22,
   "yaw": 60.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_77DE9676_6449_B120_41D0_A9549A023D0E, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_7C9C7E26_64D8_B120_41D6_4C4DB9269475, this.ImageResource_7C9C2E26_64D8_B120_41C3_B04B1EF893B3, this.ImageResource_7C9C3E26_64D8_B120_41D6_C8DF27C27C02, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_57E4EE28_59F9_4D08_41D1_66B2CEA2C5FA",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.64,
   "yaw": 60.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 26.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.14,
   "image": "this.AnimatedImageResource_7CA46DF4_64D8_B321_41D7_75DA3A4A96C1",
   "pitch": -24.76,
   "yaw": -23.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724, this.camera_7F9BC9D3_643F_7367_41C5_9776FE11680B); this.mainPlayList.set('selectedIndex', 1); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_76BA7731_644B_9F23_41CC_113317EF72A5",
 "data": {
  "label": "Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.14,
   "yaw": -23.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0_HS_2_0.png",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 120
     }
    ]
   },
   "hfov": 7.86,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.33,
   "yaw": -26.15
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365, this.camera_7FFDF9F6_643F_7320_41D0_857D6299B69D); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7737D461_6449_B123_41C5_83B945CD97AA",
 "data": {
  "label": "Arrow Transparent Left"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.86,
   "yaw": -26.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.42,
   "image": "this.AnimatedImageResource_7CA5EDF4_64D8_B321_41B6_939F2333E890",
   "pitch": -44.67,
   "yaw": -170.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D14BBF8_5668_E242_4193_5A819379C1D0, this.camera_7F8E09D3_643F_7367_41D1_FF49B7CEEB02); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_77DDDE63_6478_F127_41CB_649A4BEA5B09",
 "data": {
  "label": "Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.42,
   "yaw": -170.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -44.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.48,
   "image": "this.AnimatedImageResource_4B5BCF56_5A1B_4B18_41CE_036D70427F87",
   "pitch": 10.3,
   "yaw": -25.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_57AFDFE2_59F9_CB38_41D5_0D8041D9842C",
 "maps": [
  {
   "hfov": 21.48,
   "yaw": -25.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Almacen"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0_HS_1_0.png",
      "width": 463,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ]
   },
   "pitch": 28.61,
   "yaw": -41.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_77F14CF7_6478_912F_41C2_3CE1C0C84AC6",
 "maps": [
  {
   "hfov": 24.09,
   "yaw": -41.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 28.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0_HS_1_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.54,
   "image": "this.AnimatedImageResource_7CBCADFD_64D8_B323_41D4_33A3F42C2D91",
   "pitch": -49.88,
   "yaw": 168.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 6, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_76C8CDDE_6479_F361_41C1_821F9F74CCCF",
 "data": {
  "label": "Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.54,
   "yaw": 168.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -49.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "\u00bfSi has obserbado con atenci\u00f3n?\u000d\u000dsi tu respuesta es SI, socializa con tus compa\u00f1eros e instructor que riesgos o peligros viste durante el recorrido"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 47.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0_HS_3_0.png",
      "width": 833,
      "class": "ImageResourceLevel",
      "height": 698
     }
    ]
   },
   "pitch": 13.69,
   "yaw": 103.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7103B33A_6447_7720_41D8_5E5274EACAFA",
 "maps": [
  {
   "hfov": 47.95,
   "yaw": 103.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0_HS_3_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.12,
   "image": "this.AnimatedImageResource_4B59DF56_5A1B_4B18_41D2_694A5BAE072F",
   "pitch": -10.57,
   "yaw": -40,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_777CD79D_6449_9FE3_41BA_EBD1232DF647, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_7C81CE24_64D8_B120_41D0_561F151EFD6F, this.ImageResource_7C81DE25_64D8_B120_41B8_BE1368E3F84F, this.ImageResource_7C81BE25_64D8_B120_41C1_DE90BA7CA0C3, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_74DAE742_64C8_9F61_41D6_11EF24F673C6); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_57C58B60_59E7_CB38_41A2_1ABBD451B26A",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.12,
   "yaw": -40,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.24,
   "image": "this.AnimatedImageResource_4B59BF56_5A1B_4B18_41D3_C0C1099B7142",
   "pitch": 6.06,
   "yaw": -60.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_74C62284_6447_B1E0_418C_D682BEAB7C02, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_7C826E25_64D8_B120_41A8_BE076070B946, this.ImageResource_7C824E25_64D8_B120_41AA_B993630C7CED, this.ImageResource_7C825E25_64D8_B120_41CB_AAA51762939B, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_74DAE742_64C8_9F61_41D6_11EF24F673C6); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_49D4106B_59F8_D506_41D5_11A10AD47ED2",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.24,
   "yaw": -60.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.44,
   "image": "this.AnimatedImageResource_7CAB9DF3_64D8_B327_41D6_ABE113925D0E",
   "pitch": -22.5,
   "yaw": -1.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13, this.camera_7FC07A41_643F_7160_41D0_9E054CABAC5E); this.mainPlayList.set('selectedIndex', 0); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6B9230E2_6448_B121_41B0_E5E7BFEE46C5",
 "data": {
  "label": "Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.44,
   "yaw": -1.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.53,
   "image": "this.AnimatedImageResource_7CAB2DF4_64D8_B321_41C2_E712D74CE492",
   "pitch": -39.65,
   "yaw": 170.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7, this.camera_7FD1BA31_643F_7123_41C3_64241E60FF30); this.mainPlayList.set('selectedIndex', 2); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_75C165D5_6458_F360_41D5_338CCFA4A010",
 "data": {
  "label": "Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.53,
   "yaw": 170.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 20.61,
   "image": "this.AnimatedImageResource_7CA6ADF5_64D8_B323_41C3_36C6380B8EC2",
   "pitch": 11.08,
   "yaw": -10.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_7FB8E9B4_643F_7320_41D7_1F531510E258, 0, this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365); this.MainViewerPanoramaPlayer.play()",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_57FFEC4B_59FB_4D0F_4184_B1CA98F324EF",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.61,
   "yaw": -10.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "\u00c1rea administrativa"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_1_0.png",
      "width": 939,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ]
   },
   "pitch": 56.75,
   "yaw": -11.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_77917997_6479_93EF_41BA_83917986C68A",
 "maps": [
  {
   "hfov": 30.51,
   "yaw": -11.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 56.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_1_0_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.87,
   "image": "this.AnimatedImageResource_7CA36DFB_64D8_B326_4176_7B8D9057D072",
   "pitch": -62.58,
   "yaw": -10.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD, this.camera_7F265A70_643F_7121_4192_70397D12DDF9); this.setMediaBehaviour(this.playList_7FB9A9B4_643F_7320_41BC_78F4399D2827, 0, this.panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365); this.MainViewerPanoramaPlayer.play(); this.mainPlayList.set('selectedIndex', 5); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_71051A7F_644F_711F_41C4_2AF647577DD7",
 "data": {
  "label": "Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.87,
   "yaw": -10.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -62.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.32,
   "image": "this.AnimatedImageResource_7FB9B9B4_643F_7320_41D0_3B11174301A6",
   "pitch": -52.86,
   "yaw": 168.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7, this.camera_7F365A5A_643F_7161_41D3_BFE8EDC5F1B2); this.mainPlayList.set('selectedIndex', 2); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72BA9388_6438_97E1_41D1_B745DC733896",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.32,
   "yaw": 168.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -52.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "cursor": "hand",
 "id": "IconButton_599C011C_55B8_C90F_41D1_373A93BC79BD",
 "width": 49,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": 30,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 49,
 "iconURL": "skin/IconButton_599C011C_55B8_C90F_41D1_373A93BC79BD.png",
 "maxHeight": 37,
 "bottom": 8,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 37,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_599C011C_55B8_C90F_41D1_373A93BC79BD_rollover.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "rotate": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "rotate": false,
 "angle": 180,
 "class": "CeilingCapPanoramaOverlay",
 "hfov": 45,
 "id": "panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_ccap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_ccap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.91,
   "image": "this.AnimatedImageResource_4B56CF56_5A1B_4B18_41B4_792FD2A6869C",
   "pitch": 15.66,
   "yaw": -116.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_7538E4BE_64C8_9121_41D1_2E4640885CCD, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_7C8A7E18_64D8_B0E0_41B0_2BC191AB8223, this.ImageResource_7C8A4E19_64D8_B0E0_41B1_9FD459DF2657, this.ImageResource_7C8A3E19_64D8_B0E0_41D6_1C89D8FC1854, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_74DAE742_64C8_9F61_41D6_11EF24F673C6); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_56A50E4E_59E9_4D08_41C9_8C5BE215993D",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.91,
   "yaw": -116.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.2,
   "image": "this.AnimatedImageResource_4B56BF56_5A1B_4B18_41D6_88EEBA8DA826",
   "pitch": 7.98,
   "yaw": -100.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_749052C1_64C9_B163_41CC_DAACEEDC243E, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_7C87CE1D_64D8_B0E0_418F_5616C682AAEB, this.ImageResource_7C87DE1D_64D8_B0E0_419D_393CBCAFD7E4, this.ImageResource_7C87AE1D_64D8_B0E0_4153_5F2FC5F7E8F3, null, this.audio_74E23495_644B_71E3_41D5_CB13CB641B13, true); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_74DAE742_64C8_9F61_41D6_11EF24F673C6); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_572AAD9B_59E8_CF0F_41CB_D3436047159F",
 "data": {
  "label": "Info Red 04"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.2,
   "yaw": -100.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "blending": 0,
 "video": {
  "width": 784,
  "class": "VideoResource",
  "height": 1176,
  "mp4Url": "media/video_6AD51E38_6448_F121_41C2_7C4255C5B257.mp4"
 },
 "hfov": 26.77,
 "autoplay": false,
 "id": "overlay_6AC6B459_6449_7163_4185_E358DDD1F35E",
 "enabledInCardboard": true,
 "loop": false,
 "class": "VideoPanoramaOverlay",
 "pitch": -10.58,
 "useHandCursor": true,
 "roll": -3.37,
 "yaw": 30.48,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_6AC6B459_6449_7163_4185_E358DDD1F35E_t.jpg",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1620
   }
  ]
 },
 "chromaThreshold": 0.19,
 "rotationY": -1.26,
 "rotationX": 13.06,
 "chromaSmoothing": 0.2,
 "click": "this.overlay_6AC6B459_6449_7163_4185_E358DDD1F35E.play()",
 "data": {
  "label": "Video"
 },
 "chromaColor": "#0099FF",
 "vfov": 52.59,
 "videoVisibleOnStop": false,
 "distance": 50
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "TE DAMOS LA BIENVENIDA"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 51.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_5_0.png",
      "width": 1779,
      "class": "ImageResourceLevel",
      "height": 267
     }
    ]
   },
   "pitch": 61.03,
   "yaw": 12.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_75FCBFAD_64C8_8F23_41D5_9A50511B87C3",
 "maps": [
  {
   "hfov": 51.02,
   "yaw": 12.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 61.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_5_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Observa tu entorno, tomate el tiempo que necesites para leer y comprender el contexto del tour."
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 45.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_6_0.png",
      "width": 833,
      "class": "ImageResourceLevel",
      "height": 430
     }
    ]
   },
   "pitch": 21.3,
   "yaw": 103.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_771201C7_644F_736F_41C4_B6E29CA264F5",
 "maps": [
  {
   "hfov": 45.98,
   "yaw": 103.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 21.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_6_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "\u00c1rea de lavado"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_7_0.png",
      "width": 686,
      "class": "ImageResourceLevel",
      "height": 156
     }
    ]
   },
   "pitch": 27.24,
   "yaw": -66.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7448FFCB_6447_8F67_41C6_6C11DC615E71",
 "maps": [
  {
   "hfov": 36.14,
   "yaw": -66.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 27.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_7_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.54,
   "image": "this.AnimatedImageResource_7CAA5DF3_64D8_B327_41D7_EDAF3F0938E3",
   "pitch": -27.57,
   "yaw": 1.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5A3F2AE1_5668_6242_41B9_A67F47943724, this.camera_7F162A80_643F_71E0_41D4_EED642D41B7F); this.mainPlayList.set('selectedIndex', 1); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_74A6A0AC_6458_F120_41C4_137483FF6532); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7435792F_6458_933F_41C5_5A4648BB9006",
 "data": {
  "label": "Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.54,
   "yaw": 1.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_8_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "data": {
  "name": "-button set container"
 },
 "layout": "horizontal",
 "left": "0%",
 "width": 1199,
 "scrollBarColor": "#000000",
 "id": "Container_599D911C_55B8_C90F_41C2_D9AAAF6CBB98",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 30,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "height": 51,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA58DF4_64D8_B321_41C2_9CC437A7A655",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0_HS_0_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_7CA55DF4_64D8_B321_41D4_97F81811B3F7",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5D14BBF8_5668_E242_4193_5A819379C1D0_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4B5B0F56_5A1B_4B18_41C2_F57C4B5B3BD7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_1_HS_1_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_7CA3DDFC_64D8_B321_41A5_6060D70DC928",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_7CA37DFC_64D8_B321_41CE_462FD5164737",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5D123156_5668_BE4E_4193_51FD10A3BFAD_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4B587F56_5A1B_4B18_41C9_D5930001BEED",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_1_HS_0_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_7CA46DF4_64D8_B321_41D7_75DA3A4A96C1",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_7CA5EDF4_64D8_B321_41B6_939F2333E890",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5AC6B01A_5668_FDC6_41D4_0752A5F40FF7_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4B5BCF56_5A1B_4B18_41CE_036D70427F87",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_1_HS_0_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_7CBCADFD_64D8_B323_41D4_33A3F42C2D91",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5DE3DB83_5668_A2C6_4183_3B0BBE48233F_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4B59DF56_5A1B_4B18_41D2_694A5BAE072F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_1_HS_0_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4B59BF56_5A1B_4B18_41D3_C0C1099B7142",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_1_HS_1_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_7CAB9DF3_64D8_B327_41D6_ABE113925D0E",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_7CAB2DF4_64D8_B321_41C2_E712D74CE492",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5A3F2AE1_5668_6242_41B9_A67F47943724_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_7CA6ADF5_64D8_B323_41C3_36C6380B8EC2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_0_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_7CA36DFB_64D8_B326_4176_7B8D9057D072",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_7FB9B9B4_643F_7320_41D0_3B11174301A6",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5DF9E6ED_5668_A242_41D4_44C5CF895365_0_HS_4_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4B56CF56_5A1B_4B18_41B4_792FD2A6869C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_1_HS_3_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4B56BF56_5A1B_4B18_41D6_88EEBA8DA826",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_1_HS_4_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_7CAA5DF3_64D8_B327_41D7_EDAF3F0938E3",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_8_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
}],
 "start": "this.playAudioList([this.audio_7126F165_64D9_F323_41D5_CE773A6BA2EA]); this.init()",
 "data": {
  "name": "Player435"
 },
 "children": [
  "this.MainViewer",
  "this.Container_599C311C_55B8_C90F_41B3_97E7E90FB79D",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Player",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scripts": {
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "unregisterKey": function(key){  delete window[key]; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
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
