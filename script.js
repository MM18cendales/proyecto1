(function(){
    var script = {
 "desktopMipmappingEnabled": false,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_47317245_54D6_DC7D_41C5_073BEA11DB44], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.Button_47316245_54D6_DC7D_41B3_52B1E037740B,this.Button_47312245_54D6_DC7D_4197_0FCA46E81520].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "id": "rootPlayer",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "captura1",
 "id": "panorama_5AC0A514_5143_68C0_41A3_DB213B302B13",
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0",
  "this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_ccap0",
  "this.overlay_597DEB3E_54BD_AC0C_41D0_0B485D648132",
  "this.overlay_46F6BC4D_54B2_E40D_41C5_9F064E5D57F6",
  "this.overlay_465C1E27_54D2_E43D_41D2_41A3D818AB33",
  "this.overlay_478DD963_54DE_EC35_41D1_0DE768BD6986",
  "this.popup_400D18FB_54DD_AC15_41B8_DDDA3764F268"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_58C94501_553A_020B_41AE_92F72BB52A60",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5B1207F1_5143_1740_41C0_26026BA69412_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "captura6",
 "id": "panorama_5B12B71D_5143_E8C3_41CA_B1600449F635",
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_tcap0",
  "this.panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_ccap0",
  "this.overlay_4671EB50_54D6_AC13_419A_136A779658ED"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_58C94501_553A_020B_41AE_92F72BB52A60",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid58F39501_553A_020B_41C4_DD2BA9DBA7EFPanoramaPlayer)",
   "media": "this.media_470F9969_54DD_AC35_41C1_7C1F4595C005",
   "start": "this.viewer_uid58F39501_553A_020B_41C4_DD2BA9DBA7EFPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_58F35501_553A_020B_417E_B215D1828A83, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_58F35501_553A_020B_417E_B215D1828A83, 0)",
   "class": "Video360PlayListItem",
   "camera": "this.media_470F9969_54DD_AC35_41C1_7C1F4595C005_camera",
   "player": "this.viewer_uid58F39501_553A_020B_41C4_DD2BA9DBA7EFPanoramaPlayer"
  }
 ],
 "id": "playList_58F35501_553A_020B_417E_B215D1828A83",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_5B2BF099_5143_29C0_41B0_8466A89195D2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_5B1207F1_5143_1740_41C0_26026BA69412",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5B1207F1_5143_1740_41C0_26026BA69412_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_5B275FD5_5143_1740_41C0_894FDBF57B48",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_5B12B71D_5143_E8C3_41CA_B1600449F635",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "media": "this.panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_477569AD_54DD_6C0D_41C2_BAF91B5B9354_t.jpg",
 "video": {
  "width": 2160,
  "mp4Url": "media/video_477569AD_54DD_6C0D_41C2_BAF91B5B9354.mp4",
  "class": "VideoResource",
  "height": 1080
 },
 "label": "con obstaculo",
 "id": "video_477569AD_54DD_6C0D_41C2_BAF91B5B9354",
 "width": 2160,
 "loop": false,
 "scaleMode": "fit_inside",
 "class": "Video",
 "height": 1080
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "captura2",
 "id": "panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3",
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_tcap0",
  "this.panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_ccap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_58C94501_553A_020B_41AE_92F72BB52A60",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
   "media": "this.media_470F9969_54DD_AC35_41C1_7C1F4595C005",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_58F70501_553A_020B_41D3_DEE0663483F4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_58F70501_553A_020B_41D3_DEE0663483F4, 0)",
   "class": "Video360PlayListItem",
   "camera": "this.media_470F9969_54DD_AC35_41C1_7C1F4595C005_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "playList_58F70501_553A_020B_41D3_DEE0663483F4",
 "class": "PlayList"
},
{
 "partial": false,
 "label": "captura4",
 "id": "panorama_5B1207F1_5143_1740_41C0_26026BA69412",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B275FD5_5143_1740_41C0_894FDBF57B48"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.panorama_5B1207F1_5143_1740_41C0_26026BA69412_tcap0",
  "this.panorama_5B1207F1_5143_1740_41C0_26026BA69412_ccap0",
  "this.overlay_442ABDC5_54D3_A47D_41BB_CB65E5073561"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_58C94501_553A_020B_41AE_92F72BB52A60",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "gyroscopeEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.Button_47317245_54D6_DC7D_41C5_073BEA11DB44",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonToggleHotspots": "this.Button_47315245_54D6_DC7D_41B1_0B71C979CC65",
 "id": "MainViewerPanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/video_447BDC60_54BD_E434_41D3_19AD532B00CC_t.jpg",
 "video": {
  "width": 1280,
  "mp4Url": "media/video_447BDC60_54BD_E434_41D3_19AD532B00CC.mp4",
  "class": "VideoResource",
  "height": 720
 },
 "label": "dance_-_46012 (1080p)",
 "id": "video_447BDC60_54BD_E434_41D3_19AD532B00CC",
 "width": 1920,
 "loop": false,
 "scaleMode": "fit_inside",
 "class": "Video",
 "height": 1080
},
{
 "partial": false,
 "label": "con obstaculo",
 "hfovMin": 60,
 "loop": false,
 "id": "media_470F9969_54DD_AC35_41C1_7C1F4595C005",
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005_t.jpg",
 "class": "Video360",
 "hfovMax": 140,
 "video": [
  {
   "width": 2160,
   "posterURL": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005_poster.jpg",
   "class": "Video360Resource",
   "type": "video/mp4",
   "bitrate": 8748,
   "url": "media/media_470F9969_54DD_AC35_41C1_7C1F4595C005.mp4",
   "framerate": 50,
   "height": 1080
  }
 ]
},
{
 "items": [
  {
   "media": "this.video_477569AD_54DD_6C0D_41C2_BAF91B5B9354",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_58F76501_553A_020B_41BC_5526418FD717, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_58F76501_553A_020B_41BC_5526418FD717, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_58F76501_553A_020B_41BC_5526418FD717",
 "class": "PlayList"
},
{
 "manualZoomSpeed": 1,
 "manualRotationSpeed": 1800,
 "automaticRotationSpeed": 10,
 "class": "RotationalCamera",
 "automaticZoomSpeed": 10,
 "id": "media_470F9969_54DD_AC35_41C1_7C1F4595C005_camera",
 "initialPosition": {
  "hfov": 120,
  "yaw": 0,
  "class": "RotationalCameraPosition",
  "pitch": 0
 }
},
{
 "rollOverFontColor": "#FFFFFF",
 "opacity": 0.4,
 "rollOverOpacity": 0.8,
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
 "fontColor": "#FFFFFF",
 "fontFamily": "Arial",
 "rollOverBackgroundColor": "#000000",
 "id": "Menu_58C94501_553A_020B_41AE_92F72BB52A60",
 "class": "Menu",
 "selectedBackgroundColor": "#202020",
 "selectedFontColor": "#FFFFFF",
 "backgroundColor": "#404040"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_45F60701_54B3_65F5_41CA_C9EF1D5A27CD_t.png",
 "height": 1325,
 "label": "nomaddi logo",
 "id": "photo_45F60701_54B3_65F5_41CA_C9EF1D5A27CD",
 "width": 2773,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/photo_45F60701_54B3_65F5_41CA_C9EF1D5A27CD.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 }
},
{
 "items": [
  {
   "media": "this.video_477569AD_54DD_6C0D_41C2_BAF91B5B9354",
   "start": "this.viewer_uid58F0B501_553A_020B_41D3_5859BCCA38F2VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_5ECFC669_551A_0E1B_41C7_650B6AFCF358, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_5ECFC669_551A_0E1B_41C7_650B6AFCF358, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid58F0B501_553A_020B_41D3_5859BCCA38F2VideoPlayer)",
   "player": "this.viewer_uid58F0B501_553A_020B_41D3_5859BCCA38F2VideoPlayer"
  }
 ],
 "id": "PlayList_5ECFC669_551A_0E1B_41C7_650B6AFCF358",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "bodyPaddingTop": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "id": "window_44885C3B_54B2_E415_41D0_3AE2FEE7CAE2",
 "width": 400,
 "shadowSpread": 1,
 "bodyBackgroundOpacity": 1,
 "propagateClick": false,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 20,
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "overflow": "scroll",
 "headerVerticalAlign": "middle",
 "modal": true,
 "headerPaddingBottom": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "footerHeight": 5,
 "scrollBarOpacity": 0.5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "backgroundColor": [],
 "minWidth": 20,
 "backgroundColorDirection": "vertical",
 "height": 600,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "titleFontFamily": "Arial",
 "title": "bailarin",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "titleFontStyle": "normal",
 "bodyPaddingBottom": 5,
 "shadowVerticalLength": 0,
 "gap": 10,
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "verticalAlign": "middle",
 "headerBackgroundOpacity": 1,
 "veilColorDirection": "horizontal",
 "shadowBlurRadius": 6,
 "headerPaddingTop": 10,
 "closeButtonIconHeight": 12,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "contentOpaque": false,
 "class": "Window",
 "bodyPaddingLeft": 5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "footerBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "children": [
  "this.htmlText_44880C3B_54B2_E415_41BA_1AE5921CF2E4",
  "this.image_uid58FC8501_553A_020B_41C7_A3D2377D745A_1"
 ],
 "titleFontSize": "1.29vmin",
 "titleFontWeight": "normal",
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "titlePaddingRight": 5,
 "paddingRight": 0,
 "layout": "vertical",
 "backgroundColorRatios": [],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonIconLineWidth": 2,
 "titleFontColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "bodyBorderSize": 0,
 "borderSize": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingLeft": 5,
 "headerBorderColor": "#000000",
 "bodyPaddingRight": 5,
 "headerPaddingLeft": 10,
 "headerPaddingRight": 10,
 "titleTextDecoration": "none",
 "headerBorderSize": 0,
 "closeButtonIconWidth": 12,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "data": {
  "name": "Window3211"
 },
 "paddingTop": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundOpacity": 1,
 "scrollBarMargin": 2
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "hfov": 165,
  "yaw": 36.94,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_camera",
 "initialPosition": {
  "yaw": 36.94,
  "class": "PanoramaCameraPosition",
  "pitch": -3.86
 },
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": -3.86
  }
 ]
},
{
 "displayPlaybackBar": true,
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer"
},
{
 "partial": false,
 "label": "captura5",
 "id": "panorama_5B275FD5_5143_1740_41C0_894FDBF57B48",
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_tcap0",
  "this.panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_ccap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_58C94501_553A_020B_41AE_92F72BB52A60",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.video_447BDC60_54BD_E434_41D3_19AD532B00CC",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_58F73501_553A_020B_41D2_F0FA368B68B5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_58F73501_553A_020B_41D2_F0FA368B68B5, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_58F73501_553A_020B_41D2_F0FA368B68B5",
 "class": "PlayList"
},
{
 "bodyPaddingTop": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "id": "window_47A875B5_54D3_641C_41D0_3E0D1C50B235",
 "width": 400,
 "shadowSpread": 1,
 "bodyBackgroundOpacity": 1,
 "propagateClick": false,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 20,
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "overflow": "scroll",
 "headerVerticalAlign": "middle",
 "modal": true,
 "headerPaddingBottom": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "footerHeight": 5,
 "scrollBarOpacity": 0.5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "backgroundColor": [],
 "minWidth": 20,
 "backgroundColorDirection": "vertical",
 "height": 600,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "titleFontFamily": "Arial",
 "title": "peligro",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "titleFontStyle": "normal",
 "bodyPaddingBottom": 5,
 "shadowVerticalLength": 0,
 "closeButtonBorderRadius": 11,
 "paddingBottom": 0,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "verticalAlign": "middle",
 "headerBackgroundOpacity": 1,
 "veilColorDirection": "horizontal",
 "shadowBlurRadius": 6,
 "headerPaddingTop": 10,
 "closeButtonIconHeight": 12,
 "shadow": true,
 "gap": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "contentOpaque": false,
 "class": "Window",
 "bodyPaddingLeft": 5,
 "closeButtonBackgroundColorRatios": [],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "footerBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "children": [
  "this.htmlText_47B665B5_54D3_641C_41CB_082FE054B848",
  "this.viewer_uid58F39501_553A_020B_41C4_DD2BA9DBA7EF"
 ],
 "titleFontSize": "1.29vmin",
 "titleFontWeight": "normal",
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "titlePaddingRight": 5,
 "paddingRight": 0,
 "layout": "vertical",
 "backgroundColorRatios": [],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonIconLineWidth": 2,
 "titleFontColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "bodyBorderSize": 0,
 "borderSize": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titlePaddingLeft": 5,
 "headerBorderColor": "#000000",
 "bodyPaddingRight": 5,
 "headerPaddingLeft": 10,
 "headerPaddingRight": 10,
 "titleTextDecoration": "none",
 "headerBorderSize": 0,
 "closeButtonIconWidth": 12,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundColor": [],
 "close": "this.playList_58F35501_553A_020B_417E_B215D1828A83.set('selectedIndex', -1);",
 "titlePaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "data": {
  "name": "Window8083"
 },
 "paddingTop": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "backgroundOpacity": 1,
 "scrollBarMargin": 2
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "partial": false,
 "label": "captura3",
 "id": "panorama_5B2BF099_5143_29C0_41B0_8466A89195D2",
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_tcap0",
  "this.panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_ccap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_58C94501_553A_020B_41AE_92F72BB52A60",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "rotationY": 0,
 "hideDuration": 500,
 "hfov": 5.07,
 "hideEasing": "cubic_out",
 "loop": false,
 "id": "popup_400D18FB_54DD_AC15_41B8_DDDA3764F268",
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "yaw": -101.8,
 "showDuration": 500,
 "autoplay": true,
 "popupMaxHeight": "95%",
 "pitch": -63.68,
 "video": {
  "width": 2160,
  "mp4Url": "media/video_477569AD_54DD_6C0D_41C2_BAF91B5B9354.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "closeButtonBackgroundOpacity": 0.3,
 "bodyPaddingTop": 0,
 "closeButtonRollOverIconColor": "#666666",
 "id": "window_5CFAF1A4_551A_0209_41CD_4143A86E4638",
 "shadowSpread": 1,
 "closeButtonBorderSize": 0,
 "bodyBackgroundOpacity": 0,
 "propagateClick": false,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "scrollBarWidth": 10,
 "closeButtonPressedBorderColor": "#000000",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 20,
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "overflow": "scroll",
 "headerVerticalAlign": "middle",
 "modal": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonPressedBorderSize": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonPressedIconColor": "#888888",
 "footerHeight": 5,
 "scrollBarOpacity": 0.5,
 "headerPaddingBottom": 5,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "backgroundColor": [],
 "minWidth": 20,
 "backgroundColorDirection": "vertical",
 "closeButtonPaddingLeft": 5,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "titleFontFamily": "Arial",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "veilOpacity": 0.4,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBackgroundOpacity": 0,
 "bodyPaddingBottom": 0,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "gap": 10,
 "closeButtonBorderRadius": 0,
 "paddingBottom": 0,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "headerPaddingTop": 10,
 "closeButtonPaddingTop": 5,
 "closeButtonIconHeight": 20,
 "shadow": true,
 "closeButtonPaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "contentOpaque": false,
 "class": "Window",
 "closeButtonPressedIconLineWidth": 5,
 "bodyPaddingLeft": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 0.3,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverIconLineWidth": 5,
 "children": [
  "this.viewer_uid58F0B501_553A_020B_41D3_5859BCCA38F2"
 ],
 "titleFontSize": "1.29vmin",
 "shadowColor": "#000000",
 "layout": "vertical",
 "shadowOpacity": 0.5,
 "titlePaddingRight": 5,
 "paddingRight": 0,
 "backgroundColorRatios": [],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonIconColor": "#000000",
 "closeButtonPaddingBottom": 5,
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonIconLineWidth": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonBorderColor": "#000000",
 "borderSize": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "headerBackgroundColorDirection": "vertical",
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingLeft": 5,
 "bodyPaddingRight": 0,
 "headerPaddingLeft": 10,
 "headerPaddingRight": 0,
 "closeButtonIconWidth": 20,
 "footerBackgroundOpacity": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "titlePaddingBottom": 5,
 "data": {
  "name": "Window310"
 },
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2
},
{
 "partial": false,
 "label": "captura7",
 "id": "panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34",
 "hfovMin": "135%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_tcap0",
  "this.panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_ccap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_58C94501_553A_020B_41AE_92F72BB52A60",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "id": "MainViewer",
 "toolTipFontStyle": "normal",
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "width": "100%",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "minHeight": 50,
 "toolTipTextShadowOpacity": 0,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "minWidth": 100,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "height": "100%",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "playbackBarHeadOpacity": 1,
 "shadow": false,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
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
 "transitionDuration": 500,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "borderSize": 0,
 "toolTipOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontSize": "1.11vmin",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderRadius": 0,
 "toolTipTextShadowColor": "#000000",
 "transitionMode": "blending",
 "playbackBarHeadBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBottom": 0
},
{
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "id": "Container_47313245_54D6_DC7D_41CE_B6C271F46825",
 "width": 60,
 "right": 15,
 "children": [
  "this.Button_47316245_54D6_DC7D_41B3_52B1E037740B",
  "this.Button_47317245_54D6_DC7D_41C5_073BEA11DB44",
  "this.Button_47314245_54D6_DC7D_41D2_5F6C0979B55D",
  "this.Button_47315245_54D6_DC7D_41B1_0B71C979CC65",
  "this.Button_47312245_54D6_DC7D_4197_0FCA46E81520"
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.02
 ],
 "horizontalAlign": "center",
 "minHeight": 1,
 "paddingLeft": 0,
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "7.61%",
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": 300,
 "layout": "vertical",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container"
},
{
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "borderRadius": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "right": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "minHeight": 0,
 "paddingLeft": 0,
 "top": 0,
 "bottom": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent1519"
 },
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.55,
 "class": "UIComponent",
 "visible": false
},
{
 "borderRadius": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "paddingRight": 0,
 "minHeight": 0,
 "paddingLeft": 0,
 "top": 0,
 "bottom": 0,
 "borderSize": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage1520"
 },
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "ZoomImage",
 "visible": false
},
{
 "textDecoration": "none",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "borderRadius": 0,
 "id": "closeButtonPopupPanorama",
 "iconColor": "#000000",
 "shadowSpread": 1,
 "right": 10,
 "iconWidth": 20,
 "propagateClick": false,
 "rollOverIconColor": "#666666",
 "paddingRight": 5,
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "paddingLeft": 5,
 "horizontalAlign": "center",
 "minHeight": 0,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "top": 10,
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "label": "",
 "mode": "push",
 "iconHeight": 20,
 "iconLineWidth": 5,
 "layout": "horizontal",
 "fontSize": "1.29vmin",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "paddingBottom": 5,
 "pressedIconColor": "#888888",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton1521"
 },
 "shadow": false,
 "paddingTop": 5,
 "backgroundOpacity": 0.3,
 "class": "CloseButton",
 "visible": false,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "borderRadius": 0,
 "id": "Button_47316245_54D6_DC7D_41B3_52B1E037740B",
 "width": 60,
 "shadowSpread": 1,
 "iconWidth": 30,
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "mode": "toggle",
 "iconHeight": 30,
 "height": 60,
 "pressedIconURL": "skin/Button_47316245_54D6_DC7D_41B3_52B1E037740B_pressed.png",
 "fontSize": 12,
 "gap": 5,
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "iconURL": "skin/Button_47316245_54D6_DC7D_41B3_52B1E037740B.png",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button settings VR"
 },
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Button",
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "borderRadius": 0,
 "pressedIconHeight": 30,
 "id": "Button_47312245_54D6_DC7D_4197_0FCA46E81520",
 "width": 60,
 "shadowSpread": 1,
 "iconWidth": 30,
 "pressedIconWidth": 30,
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "mode": "toggle",
 "iconHeight": 30,
 "height": 60,
 "pressedIconURL": "skin/Button_47312245_54D6_DC7D_4197_0FCA46E81520_pressed.png",
 "fontSize": 12,
 "gap": 5,
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "iconURL": "skin/Button_47312245_54D6_DC7D_4197_0FCA46E81520.png",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Button",
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "borderRadius": 0,
 "pressedIconHeight": 30,
 "id": "Button_47314245_54D6_DC7D_41D2_5F6C0979B55D",
 "width": 60,
 "shadowSpread": 1,
 "iconWidth": 30,
 "pressedIconWidth": 30,
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "mode": "toggle",
 "iconHeight": 30,
 "height": 60,
 "pressedIconURL": "skin/Button_47314245_54D6_DC7D_41D2_5F6C0979B55D_pressed.png",
 "fontSize": 12,
 "gap": 5,
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "iconURL": "skin/Button_47314245_54D6_DC7D_41D2_5F6C0979B55D.png",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Mute"
 },
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Button",
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "id": "panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_tcap0",
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "id": "panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_ccap0",
 "angle": 180,
 "class": "CeilingCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "id": "overlay_597DEB3E_54BD_AC0C_41D0_0B485D648132",
 "blending": 0,
 "roll": 0.86,
 "loop": false,
 "hfov": 23.47,
 "chromaThreshold": 0.13,
 "videoVisibleOnStop": false,
 "useHandCursor": true,
 "yaw": 8.5,
 "image": {
  "levels": [
   {
    "url": "media/overlay_597DEB3E_54BD_AC0C_41D0_0B485D648132_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -18.4,
 "rotationY": 3.5,
 "vfov": 35.4,
 "rotationX": 19.71,
 "click": "this.showWindow(this.window_44885C3B_54B2_E415_41D0_3AE2FEE7CAE2, null, false); this.overlay_597DEB3E_54BD_AC0C_41D0_0B485D648132.play()",
 "video": {
  "width": 1280,
  "mp4Url": "media/video_447BDC60_54BD_E434_41D3_19AD532B00CC.mp4",
  "class": "VideoResource",
  "height": 720
 },
 "chromaSmoothing": 0.1,
 "chromaColor": "#28C034",
 "stateChange": "if(this.overlay_597DEB3E_54BD_AC0C_41D0_0B485D648132.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_597DEB3E_54BD_AC0C_41D0_0B485D648132', [this.overlay_597DEB3E_54BD_AC0C_41D0_0B485D648132]); } else { this.resumeGlobalAudios('overlay_597DEB3E_54BD_AC0C_41D0_0B485D648132'); }",
 "distance": 50,
 "class": "VideoPanoramaOverlay",
 "autoplay": false,
 "data": {
  "label": "Video"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 82.74,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_0_0.png",
      "width": 1704,
      "class": "ImageResourceLevel",
      "height": 1405
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.6,
   "yaw": 99.21
  }
 ],
 "id": "overlay_46F6BC4D_54B2_E40D_41C5_9F064E5D57F6",
 "data": {
  "label": "Poligon"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 164
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 99.21,
   "hfov": 82.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.6
  }
 ],
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_47A875B5_54D3_641C_41D0_3E0D1C50B235, null, true); this.playList_58F35501_553A_020B_417E_B215D1828A83.set('selectedIndex', 0); ; this.viewer_uid58F39501_553A_020B_41C4_DD2BA9DBA7EFPanoramaPlayer.play(); ",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.14,
   "image": "this.AnimatedImageResource_41522B93_54DD_6C14_41C6_7BE453A397F1",
   "yaw": -108.96,
   "pitch": 9.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_465C1E27_54D2_E43D_41D2_41A3D818AB33",
 "data": {
  "label": "Info Red 02"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -108.96,
   "hfov": 10.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.9
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_400D18FB_54DD_AC15_41B8_DDDA3764F268, {'paddingTop':5,'backgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconWidth':20,'iconColor':'#000000','rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'iconHeight':20,'paddingRight':5,'pressedBackgroundColorDirection':'vertical','rollOverIconHeight':20,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'paddingLeft':5,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, true) } else { this.showPopupMedia(this.window_5CFAF1A4_551A_0209_41CD_4143A86E4638, this.video_477569AD_54DD_6C0D_41C2_BAF91B5B9354, this.PlayList_5ECFC669_551A_0E1B_41C7_650B6AFCF358, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.07,
   "image": "this.AnimatedImageResource_463669B7_54D2_AC1D_41BD_EEC70CB55CB3",
   "yaw": -101.8,
   "pitch": -63.68,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_478DD963_54DE_EC35_41D1_0DE768BD6986",
 "data": {
  "label": "Arrow 01"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -101.8,
   "hfov": 5.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -63.68
  }
 ],
 "rollOverDisplay": false
},
{
 "id": "panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_tcap0",
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "id": "panorama_5B12B71D_5143_E8C3_41CA_B1600449F635_ccap0",
 "angle": 180,
 "class": "CeilingCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "enabledInCardboard": true,
 "id": "overlay_4671EB50_54D6_AC13_419A_136A779658ED",
 "blending": 0,
 "loop": false,
 "hfov": 26.55,
 "chromaThreshold": 0.18,
 "videoVisibleOnStop": false,
 "useHandCursor": true,
 "roll": -1.81,
 "yaw": 135.22,
 "image": {
  "levels": [
   {
    "url": "media/overlay_4671EB50_54D6_AC13_419A_136A779658ED_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -16.86,
 "rotationY": -4.9,
 "vfov": 51.58,
 "rotationX": 17.36,
 "click": "this.overlay_4671EB50_54D6_AC13_419A_136A779658ED.play()",
 "video": {
  "width": 1280,
  "mp4Url": "media/video_447BDC60_54BD_E434_41D3_19AD532B00CC.mp4",
  "class": "VideoResource",
  "height": 720
 },
 "chromaSmoothing": 0.16,
 "chromaColor": "#28C034",
 "distance": 50,
 "class": "VideoPanoramaOverlay",
 "autoplay": false,
 "data": {
  "label": "Video"
 }
},
{
 "gyroscopeEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.Button_47317245_54D6_DC7D_41C5_073BEA11DB44",
 "viewerArea": "this.viewer_uid58F39501_553A_020B_41C4_DD2BA9DBA7EF",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonToggleHotspots": "this.Button_47315245_54D6_DC7D_41B1_0B71C979CC65",
 "id": "viewer_uid58F39501_553A_020B_41C4_DD2BA9DBA7EFPanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "id": "panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_tcap0",
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "id": "panorama_5B1638F1_5143_3940_41AA_0198CA20CCD3_ccap0",
 "angle": 180,
 "class": "CeilingCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "id": "panorama_5B1207F1_5143_1740_41C0_26026BA69412_tcap0",
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "id": "panorama_5B1207F1_5143_1740_41C0_26026BA69412_ccap0",
 "angle": 180,
 "class": "CeilingCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.49,
   "image": "this.AnimatedImageResource_41190705_54D7_A5FD_4199_59BDE4AD28FA",
   "yaw": -2.27,
   "pitch": -29.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_442ABDC5_54D3_A47D_41BB_CB65E5073561",
 "data": {
  "label": "Arrow 01b"
 },
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -2.27,
   "hfov": 16.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.08
  }
 ],
 "rollOverDisplay": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "rollOverIconWidth": 30,
 "borderRadius": 0,
 "pressedIconHeight": 30,
 "id": "Button_47317245_54D6_DC7D_41C5_073BEA11DB44",
 "width": 60,
 "shadowSpread": 1,
 "iconWidth": 30,
 "pressedIconWidth": 30,
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "mode": "toggle",
 "iconHeight": 30,
 "height": 60,
 "rollOverIconHeight": 30,
 "fontSize": 12,
 "gap": 5,
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_47317245_54D6_DC7D_41C5_073BEA11DB44_pressed.png",
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "iconURL": "skin/Button_47317245_54D6_DC7D_41C5_073BEA11DB44.png",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Gyro"
 },
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Button",
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "rollOverIconWidth": 30,
 "borderRadius": 0,
 "pressedIconHeight": 30,
 "id": "Button_47315245_54D6_DC7D_41B1_0B71C979CC65",
 "width": 60,
 "shadowSpread": 1,
 "iconWidth": 30,
 "pressedIconWidth": 30,
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "mode": "toggle",
 "iconHeight": 30,
 "height": 60,
 "rollOverIconHeight": 30,
 "fontSize": 12,
 "gap": 5,
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_47315245_54D6_DC7D_41B1_0B71C979CC65_pressed.png",
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "iconURL": "skin/Button_47315245_54D6_DC7D_41B1_0B71C979CC65.png",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings HS"
 },
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Button",
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "displayPlaybackBar": true,
 "id": "viewer_uid58F0B501_553A_020B_41D3_5859BCCA38F2VideoPlayer",
 "viewerArea": "this.viewer_uid58F0B501_553A_020B_41D3_5859BCCA38F2",
 "class": "VideoPlayer"
},
{
 "borderRadius": 0,
 "id": "htmlText_44880C3B_54B2_E415_41BA_1AE5921CF2E4",
 "width": "100%",
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "50%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">danza de minecraft</SPAN></DIV></div>",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText3212"
 },
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "shadow": false,
 "scrollBarMargin": 2
},
{
 "borderRadius": 0,
 "id": "image_uid58FC8501_553A_020B_41C7_A3D2377D745A_1",
 "width": "100%",
 "propagateClick": false,
 "paddingRight": 0,
 "url": "media/photo_45F60701_54B3_65F5_41CA_C9EF1D5A27CD.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 0,
 "borderSize": 0,
 "height": "50%",
 "minWidth": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image1516"
 },
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "shadow": false
},
{
 "id": "panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_tcap0",
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "id": "panorama_5B275FD5_5143_1740_41C0_894FDBF57B48_ccap0",
 "angle": 180,
 "class": "CeilingCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "borderRadius": 0,
 "id": "htmlText_47B665B5_54D3_641C_41CB_082FE054B848",
 "width": "100%",
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "50%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">las conexiones electricas se encuentrtan expuestas a la humedad del area de lavado </SPAN></DIV></div>",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText8084"
 },
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "shadow": false,
 "scrollBarMargin": 2
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "id": "viewer_uid58F39501_553A_020B_41C4_DD2BA9DBA7EF",
 "toolTipFontStyle": "normal",
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "width": "100%",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "minHeight": 50,
 "toolTipTextShadowOpacity": 0,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "minWidth": 100,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "height": "50%",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadOpacity": 1,
 "shadow": false,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
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
 "transitionDuration": 500,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "borderSize": 0,
 "toolTipOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontSize": "1.11vmin",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderRadius": 0,
 "toolTipTextShadowColor": "#000000",
 "transitionMode": "blending",
 "playbackBarHeadBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "data": {
  "name": "ViewerArea1517"
 },
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBottom": 2
},
{
 "id": "panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_tcap0",
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "id": "panorama_5B2BF099_5143_29C0_41B0_8466A89195D2_ccap0",
 "angle": 180,
 "class": "CeilingCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "id": "viewer_uid58F0B501_553A_020B_41D3_5859BCCA38F2",
 "toolTipFontStyle": "normal",
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "width": "100%",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "minHeight": 50,
 "toolTipTextShadowOpacity": 0,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "minWidth": 100,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "height": "100%",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "playbackBarHeadOpacity": 1,
 "shadow": false,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
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
 "transitionDuration": 500,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "borderSize": 0,
 "toolTipOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontSize": "1.11vmin",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderRadius": 0,
 "toolTipTextShadowColor": "#000000",
 "transitionMode": "blending",
 "playbackBarHeadBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "data": {
  "name": "ViewerArea1518"
 },
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "progressBottom": 2
},
{
 "id": "panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_tcap0",
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "id": "panorama_5B1DBE47_5143_F940_41C3_302D55E5DC34_ccap0",
 "angle": 180,
 "class": "CeilingCapPanoramaOverlay",
 "rotate": false,
 "inertia": false,
 "hfov": 45,
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
 "distance": 50
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_41522B93_54DD_6C14_41C6_7BE453A397F1",
 "levels": [
  {
   "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "frameDuration": 62,
 "id": "AnimatedImageResource_463669B7_54D2_AC1D_41BD_EEC70CB55CB3",
 "levels": [
  {
   "url": "media/panorama_5AC0A514_5143_68C0_41A3_DB213B302B13_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "rowCount": 3,
 "colCount": 3
},
{
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "frameDuration": 62,
 "id": "AnimatedImageResource_41190705_54D7_A5FD_4199_59BDE4AD28FA",
 "levels": [
  {
   "url": "media/panorama_5B1207F1_5143_1740_41C0_26026BA69412_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "rowCount": 3,
 "colCount": 3
}],
 "children": [
  "this.MainViewer",
  "this.Container_47313245_54D6_DC7D_41CE_B6C271F46825",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "propagateClick": false,
 "paddingRight": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "defaultVRPointer": "laser",
 "overflow": "visible",
 "mobileMipmappingEnabled": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "buttonToggleFullscreen": [
  "this.Button_47316245_54D6_DC7D_41B3_52B1E037740B",
  "this.Button_47312245_54D6_DC7D_4197_0FCA46E81520"
 ],
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": "100%",
 "layout": "absolute",
 "gap": 10,
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); }
 },
 "verticalAlign": "top",
 "paddingBottom": 0,
 "buttonToggleMute": "this.Button_47314245_54D6_DC7D_41D2_5F6C0979B55D",
 "downloadEnabled": false,
 "vrPolyfillScale": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "class": "Player",
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player435"
 }
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
