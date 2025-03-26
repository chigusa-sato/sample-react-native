import { StatusBar } from 'expo-status-bar';
import { StyleSheet, type ImageSourcePropType, View } from "react-native";
import { ImageViewer } from "@/components/image-viewer";
import { Button } from "@/components/button";
import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require("@/assets/images/background-image.png") as ImageSourcePropType;

export default function App() {
  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 2,
    });
 
    if (!result.canceled) {
      console.log(result);
    } else {
      alert("画像が選択されていません");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
       <ImageViewer placeholderImageSource={PlaceholderImage} />
     </View>
     <View style={styles.footerContainer}>
       <Button theme="primary" label="写真を選択" onPress={pickImageAsync} />
       <Button label="この写真を使用" />
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
