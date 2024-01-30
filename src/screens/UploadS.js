import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { useCreateRecipe } from "../hooks/authed/createRecipe";
import img from "../../assets/image/a7.png";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function UploadS() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeEstimatedTime, setRecipeEstimatedTime] = useState("");
  const [recipeCategory, setRecipeCategory] = useState("");

  const { mutateAsync, isPending } = useCreateRecipe(
    (data) => {
      console.log(data);
      if (data.error) {
        alert(data.message || "Something went wrong");
        return;
      }
      console.log("this is data", data);
    },
    (err) => console.log(err)
  );

  useEffect(() => {
    // Request permissions when the component mounts
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access media library is required!");
    }
  };

  const handleCreateRecipe = async () => {
    if (!selectedImage) {
      alert("Please select an image");
      return;
    }
    mutateAsync({
      recipeImage: selectedImage?.assets[0].uri,
      title: recipeTitle,
      description: recipeDescription,
      estimatedTime: recipeEstimatedTime,
      ingredients: recipeIngredients,
      category: recipeCategory,
    });
  };

  //  const handleCreateRecipe = async () => {
  //    if (!selectedImage) {
  //      alert("Please select an image");
  //      return;
  //    }
  //    const formData = new FormData();
  //    formData.append("recipeImage", {
  //      uri: selectedImage?.assets[0]?.uri,
  //      type: selectedImage?.assets[0]?.type, // or the actual type of the image
  //      name: selectedImage?.assets[0]?.fileName,
  //    });
  //    formData.append("title", recipeTitle);
  //    formData.append("description", recipeDescription);
  //    formData.append("estimatedTime", recipeEstimatedTime);
  //    formData.append("ingredients", recipeIngredients);
  //    formData.append("category", recipeCategory);
  //    mutateAsync(formData);
  //  };

  const handleImageSelect = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);
      if (!result.canceled) {
        setSelectedImage(result);
      }
    } catch (error) {
      console.error("Error selecting image:", error);
    }
  };

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main, { backgroundColor: theme.bg }]}>
          <AppBar
            color={theme.bg}
            title="Upload recipe"
            titleStyle={[style.r16, { color: theme.txt }]}
            // centerTitle={true}
            elevation={0}
            // style={{marginHorizontal:20}}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate("MyTabs")}>
                <Icon name="arrow-back" color={theme.txt} size={25} />
              </TouchableOpacity>
            }
            trailing={
              <TouchableOpacity
                onPress={handleCreateRecipe}
                disabled={
                  isPending ||
                  !selectedImage ||
                  !recipeTitle ||
                  !recipeDescription ||
                  !recipeIngredients ||
                  !recipeEstimatedTime ||
                  !recipeCategory
                }
              >
                <View
                  style={{
                    backgroundColor: "green",
                    height: height / 26,
                    width: width / 3.6,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                  }}

                >
                  {isPending ? (
                    <Text style={[style.m12, { color: Colors.secondary }]}>
                      Uploading...
                    </Text>
                  ) : (
                    <Text style={[style.m12, { color: Colors.secondary }]}>
                      Create recipe
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            }
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 10 }}
          >
            <View>
              <TouchableOpacity onPress={handleImageSelect}>
                <View
                  style={{
                    padding: 10,
                    backgroundColor: "lightblue",
                    borderRadius: 5,
                  }}
                >
                  <Text>Select Image</Text>
                </View>
              </TouchableOpacity>

              {selectedImage && (
                <Image
                  source={{uri:selectedImage?.assets[0].uri }}
                  style={{ width: 200, height: 200, marginTop: 10 }}
                />
              )}
            </View>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Recipe title
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Recipe" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here"
                onFocus={() => setIsFocused("Recipe")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    flex: 1,
                  },
                ]}
                onChangeText={(text) => setRecipeTitle(text)}
                value={recipeTitle}
              />
              <Icon name="close" color={Colors.disable} size={20} />
            </View>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Steps/Description
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Description" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                  height: 100,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here steps separated by comma"
                onFocus={() => setIsFocused("Description")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                multiline
                textAlignVertical="top"
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    height: 100,
                    flex: 1,
                  },
                ]}
                onChangeText={(text) => setRecipeDescription(text)}
                value={recipeDescription}
              />
            </View>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Time estimation
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Time" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here"
                onFocus={() => setIsFocused("Time")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    flex: 1,
                  },
                ]}
                onChangeText={(text) => setRecipeEstimatedTime(text)}
                value={recipeEstimatedTime}
              />
            </View>

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Ingredients
            </Text>

            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Ingredients" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                  height: 100,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here list of ingredients separated by comma"
                onFocus={() => setIsFocused("Ingredients")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                multiline
                textAlignVertical="top"
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    height: 100,
                    flex: 1,
                  },
                ]}
                onChangeText={(text) => setRecipeIngredients(text)}
                value={recipeIngredients}
              />
            </View>
            {/* <Icon
                name="trash"
                size={20}
                color={theme.disable}
                style={{ marginLeft: 10 }}
              /> */}

            {/* <View
              style={[
                style.inputContainer,
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 10,
                  flex: 1,
                  justifyContent: "center",
                },
              ]}
            >
              <Icons name="plus-box" size={20} color={theme.disable} />
              <Text
                style={[style.m12, { color: theme.disable, marginLeft: 10 }]}
              >
                Add more ingredients
              </Text>
            </View> */}

            <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Category
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Category" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 5,
                  marginBottom: 20,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here"
                onFocus={() => setIsFocused("Category")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    flex: 1,
                  },
                ]}
                onChangeText={(text) => setRecipeCategory(text)}
                value={recipeCategory}
              />
            </View>

            {/* <Text style={[style.m16, { color: theme.txt, marginTop: 20 }]}>
              Step by step
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={theme.a20}
                resizeMode="stretch"
                style={{ height: height / 15, width: width / 4.5 }}
              />
              <Icon
                name="trash"
                size={20}
                color={theme.disable}
                style={{ marginLeft: 10 }}
              />
            </View>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "a2" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 10,
                  height: 70,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here"
                onFocus={() => setIsFocused("a2")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                multiline
                textAlignVertical="top"
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    height: 70,
                    flex: 1,
                  },
                ]}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Image
                source={theme.a21}
                resizeMode="stretch"
                style={{ height: height / 15, width: width / 4.5 }}
              />
              <Icon
                name="trash"
                size={20}
                color={theme.disable}
                style={{ marginLeft: 10 }}
              />
            </View>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "a1" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 10,
                  height: 70,
                },
              ]}
            >
              <TextInput
                placeholder="Enter here"
                onFocus={() => setIsFocused("a1")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                multiline
                textAlignVertical="top"
                placeholderTextColor={Colors.disable}
                style={[
                  style.r12,
                  {
                    paddingHorizontal: 10,
                    color: theme.txt,
                    // fontFamily: "Poppins-Regular",
                    height: 70,
                    flex: 1,
                  },
                ]}
              />
            </View>

            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Ingredients" ? Colors.primary : theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 10,
                  flex: 1,
                  justifyContent: "center",
                  marginBottom: 20,
                },
              ]}
            >
              <Icons name="plus-box" size={20} color={theme.disable} />
              <Text
                style={[style.m12, { color: theme.disable, marginLeft: 10 }]}
              >
                Add more steps
              </Text>
            </View> */}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
