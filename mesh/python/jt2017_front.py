# -*- encoding: UTF-8 -*-
from naoqi import ALProxy
ip = "192.168.3.2"
port = 9559

# motion
motion = ALProxy("ALMotion", ip, port)
motion.moveTo(0.1,0.0,0.0) # front
#motion.moveToward(-0.1,0.0,0.0) # back
#motion.moveToward(0.0,0.1,0.0) # front
#motion.moveToward(0.0,-0.1,0.0) # back
