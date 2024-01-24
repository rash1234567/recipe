import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";

const width = Dimensions.get("screen").width;
// const height = Dimensions.get("screen").height;

export default StyleSheet.create({
  area: {
    flex: 1,
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  s28: {
    fontSize: 28,
    color: Colors.active,
    // fontFamily: 'Poppins-SemiBold'
  },
  title: {
    fontSize: 28,
    color: Colors.active,
    // fontFamily: 'Poppins-Medium'
  },
  apptitle: {
    fontSize: 24,
    color: Colors.active,
    // fontFamily: 'Poppins-Medium'
  },
  subtitle: {
    fontSize: 20,
    // fontFamily: 'Poppins-Medium',
    color: Colors.active,
  },
  s10: {
    fontSize: 10,
    color: Colors.disable,
    // fontFamily: 'Poppins-SemiBold',
  },
  r12: {
    fontSize: 12,
    color: Colors.disable,
    // fontFamily: 'Poppins-Regular',
  },
  s12: {
    fontSize: 12,
    color: Colors.disable,
    // fontFamily: 'Poppins-SemiBold',
  },
  m12: {
    fontSize: 12,
    color: Colors.disable,
    // fontFamily: 'Poppins-Medium',
  },
  r14: {
    fontSize: 14,
    color: Colors.disable,
    // fontFamily: 'Poppins-Regular',
  },
  s14: {
    fontSize: 14,
    color: Colors.disable,
    // fontFamily: 'Poppins-SemiBold',
  },
  m14: {
    fontSize: 14,
    color: Colors.disable,
    // fontFamily: 'Poppins-Medium',
  },
  r16: {
    fontSize: 16,
    color: Colors.disable,
    // fontFamily: 'Poppins-Regular'
  },
  s16: {
    fontSize: 16,
    color: Colors.disable,
    // fontFamily: 'Poppins-SemiBold'
  },
  m16: {
    fontSize: 16,
    color: Colors.disable,
    // fontFamily: 'Poppins-Medium'
  },
  r18: {
    fontSize: 18,
    color: Colors.disable,
    // fontFamily: 'Poppins-Regular'
  },
  s18: {
    fontSize: 18,
    color: Colors.disable,
    // fontFamily: 'Poppins-SemiBold'
  },
  m18: {
    fontSize: 18,
    color: Colors.disable,
    // fontFamily: 'Poppins-Medium'
  },

  btn: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    height: 52,
    borderRadius: 15,
    justifyContent: "center",
  },
  btntxt: {
    fontSize: 16,
    color: Colors.secondary,
    // fontFamily: 'Poppins-SemiBold'
  },
  indicator: {
    borderColor: "#E0E0E0",
    borderWidth: 1,
    padding: 4,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 5,
  },

  shadow: {
    shadowColor: Colors.active,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: Colors.secondary,
  },

  txtinput: {
    paddingHorizontal: 20,
    color: Colors.disable,
    height: 48,
    borderRadius: 15,
    borderWidth: 1,
  },

  radio: {
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    borderColor: Colors.bord,
    color: Colors.disable,
  },

  divider: {
    height: 1,
    backgroundColor: Colors.border,
  },

  divider1: {
    height: 1.5,
    backgroundColor: Colors.border,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
  },

  dividertxt: {
    color: Colors.disable,
    // fontFamily: 'Poppins-Regular'
  },

  btn1: {
    alignItems: "center",
    // paddingVertical:15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    height: 55,
  },
  btntxt1: {
    fontSize: 16,
    color: Colors.active,
    paddingLeft: 15,
    // fontFamily: 'Poppins-Regular'
  },

  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 48,
    // flex: 1
  },

  verticaldivider: {
    height: "60%",
    width: 1,
  },

  modalcontainer: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 140,
    paddingTop: 20,
    marginHorizontal: -10,
    alignSelf: "center",
  },
  btnoutline: {
    borderColor: Colors.bord,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 55,
    width: width / 4,
  },

  b3: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    borderColor: "#E5E7EB",
    borderWidth: 1,
  },
  follow: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },
  following: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  categoryTextSelected: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    color: Colors.secondary,
    // fontFamily:'Poppins-Regular'
  },
  categoryText: {
    fontSize: 14,
    color: Colors.primary,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 20,
    paddingBottom: 5,
    paddingTop: 7,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    // fontFamily:'Poppins-Regular'
  },
  categorycontainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30,
    justifyContent: "space-between",
  },
});
