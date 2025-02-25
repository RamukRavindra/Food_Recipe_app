import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import React from 'react'

export default function RegisterScreen(props) {
	return (
		<View className="bg-white h-full w-full">
			<StatusBar barStyle={"light-content"} />
			<Image className="h-full w-full absolute" source={require("../assets/background.png")} />

			{/* lights */}
			<View className="flex-row justify-around w-full absolute">
				<Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[225] w-[90]" source={require("../assets/light.png")} />
				<Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[160] w-[65]" source={require("../assets/light.png")} />
			</View>

			{/* title and form */}
			<View className="h-full w-full flex justify-around pt-48">
				<Animated.View entering={FadeInDown.duration(1000).springify()} className="flex items-center">
					<Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold text-4xl tracking-wider">Sign Up</Animated.Text>
				</Animated.View>

				{/* form */}
				<View className="flex items-center mx-4 space-y-4">
					<Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-2 rounded-2xl w-full">
						<TextInput placeholder='UserName' placeholderTextColor={"gray"} />
					</Animated.View>
					<Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-2 rounded-2xl w-full">
						<TextInput placeholder='Email' placeholderTextColor={"gray"} />
					</Animated.View>
					<Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-black/5 p-2 rounded-2xl w-full mb-3">
						<TextInput placeholder='Password' placeholderTextColor={"gray"} secureTextEntry />
					</Animated.View>
					<Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="w-full">
						<TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
							<Text className="text-white font-bold text-center text-xl">SignUp</Text>
						</TouchableOpacity>
					</Animated.View>
					<Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="flex-row justify-center">
						<Text>Already have an account? </Text>
						<TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
							<Text className="text-sky-600">Login</Text>
						</TouchableOpacity>
					</Animated.View>
				</View>
			</View>
		</View>
	)
}