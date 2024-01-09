import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionButton from 'react-native-circular-action-menu';
import {MotiView} from "moti";


const HomeScreen = () => {
    const [isShow, setIsShow] = useState(false)
    const buttons = [
        { icon: 'home', action: () => console.log("notes tapped!"), angle: '0deg' },
        { icon: 'notifications', action: () => console.log("notifications tapped!"), angle: '80deg' },
        { icon: 'bank', action: () => console.log("bank tapped!"), angle: '280deg' },
    ];
  return (
      <View style={{flex:1, backgroundColor: '#5f0284'}}>
          {/*Rest of App come ABOVE the action button component!*/}
          <View style={[tw`absolute bottom-5 -right-15 w-68`,styles.container]}>
              <TouchableOpacity onPress={()=>setIsShow(!isShow)} style={tw`bg-green-600 rounded-full w-20 h-20 items-center justify-center self-center`}>
                  {
                      !isShow ? <Icon name={"close"}  size={30} style={tw`p-2 text-white`} /> :<Icon name={"add"}  size={30} style={tw`p-2 text-white`} />
                  }
              </TouchableOpacity>
              {
                  isShow && (
                      <View style={tw`w-full absolute flex items-center justify-center `}>
                          {buttons.map(({ icon, action, angle }, index) => (
                              <MotiView
                                  key={index}
                                  from={{
                                      translateY: -200,
                                      opacity:0
                                  }}
                                  animate={{
                                      translateY: 0,
                                      opacity: 1,
                                      direction: "left"
                                  }}
                                  transition={{
                                      type: 'spring',
                                      delay: 200 * index,
                                  }}
                                  style={tw`w-full absolute flex items-center justify-center `}
                              >
                              <TouchableOpacity key={index} onPress={action} style={[{ position: 'absolute', transform: [{ rotate: angle }, { translateY: -80 }] },tw`bg-green-500 rounded-full `]}>
                                  {
                                      icon === 'bank' ? <Material name={icon} size={30} style={[tw`p-2 text-slate-300`,{transform: [{rotate: '120deg'}]}]} /> :<Icon name={icon} size={30} style={tw`p-2 text-slate-300`} />
                                  }
                              </TouchableOpacity>
                              </MotiView>
                          ))}
                      </View>
                  )
              }
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    container:{
        transform:  [{ rotate: '-40deg' }]
    }
});
export default HomeScreen