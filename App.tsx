import { StatusBar } from 'expo-status-bar';
import { StyleSheet, type ImageSourcePropType, View } from "react-native";
import { ImageViewer } from "@/components/image-viewer";

const PlaceholderImage = require("@/assets/images/background-image.png") as ImageSourcePropType;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
       <ImageViewer placeholderImageSource={PlaceholderImage} />
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
