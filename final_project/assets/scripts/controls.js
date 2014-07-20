
        var controlGUI = new function() {
            this.FPC = startFP;
            this.showTrackControls = true;
            this.showRoof = true;
            this.showAxisHelper = true;
            this.mirror1 = false;
            this.mirror2 = true;
            this.day = false;
            this.night = false;
            //this.clouds = false;
        }

        var gui = new dat.GUI();
        gui.add(controlGUI, "FPC");

      var track_control = gui.add(controlGUI, 'showTrackControls');
      var roof_control = gui.add(controlGUI, 'showRoof');
      var axis_control = gui.add(controlGUI, 'showAxisHelper');
      var mirror_ctrl1 = gui.add(controlGUI, 'mirror1');
      var mirror_ctrl2 = gui.add(controlGUI, 'mirror2');
      var day_ctrl = gui.add(controlGUI, 'day');
      var night_ctrl = gui.add(controlGUI, 'night');
      //var cloud_control = gui.add(controlGUI, 'clouds');

      track_control.onChange(function (value) {
          trackballControls.enabled = value;            
      }); 
      
      roof_control.onChange(function (value) {
          if(!controlGUI.showRoof) roof.visible = false;
          else roof.visible = true;            
      });

      axis_control.onChange(function (value) {
          if(!controlGUI.showAxisHelper) axisHelper.visible = false;
          else axisHelper.visible = true;            
      });

      mirror_ctrl1.onChange(function (value) {
          if(controlGUI.mirror1){mirror1_ena = true; scene.add(mirrorCube);}
          else {mirror1_ena = false; scene.remove(mirrorCube);}            
      });

      mirror_ctrl2.onChange(function (value) {
          if(!controlGUI.mirror2){mirror2_ena = false; scene.remove(mirrorCube2);}
          else {mirror2_ena = true; scene.add(mirrorCube2);}            
      });

      day_ctrl.onChange(function (value) {
          if(controlGUI.day){dinamic = false; sole.position.y = 400; sole.position.x = 0;} 
          else dinamic = true;
      });

      night_ctrl.onChange(function (value) {
          if(controlGUI.night){dinamic = false; sole.position.y = -400; sole.position.x = 0;} 
          else dinamic = true;  
      });
/*
      cloud_control.onChange(function (value) {
          if(controlGUI.clouds) {engine2.initialize(); clouds=true;}
          else {engine2.destroy(); clouds=false;}

      });
*/