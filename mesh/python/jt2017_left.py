# -*- encoding: UTF-8 -*-
from naoqi import ALProxy
ip = "192.168.3.2"
port = 9559

# motion
motion = ALProxy("ALMotion", ip, port)
#motion.moveToward(0.2,0.0,0.0) # left
#motion.moveToward(-0.2,0.0,0.0) # right
motion.moveToward(0.0,0.1,0.0) # left
#motion.moveToward(0.0,-0.1,0.0) # right

