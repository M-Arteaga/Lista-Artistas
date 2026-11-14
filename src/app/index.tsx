import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Text,
  Image,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [contra, setContra] = useState("");

  // const onRegister = () => {
  //   router.push({
  //     pathname: "/register",
  //   });
  // }

  const validarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarContra = (contra: string): string | null => {
    const mensajesError: string[] = [];
    if (contra.length < 8)
      mensajesError.push("La contraseña debe tener al menos 8 caracteres.");
    if (!/[A-Z]/.test(contra))
      mensajesError.push("La contraseña debe tener al menos una mayúscula.");
    if (!/[a-z]/.test(contra))
      mensajesError.push("La contraseña debe tener al menos una minúscula.");

    `if (mensajesError.length > 0) {
      return mensajesError.join(" ");
    } else {
      return null;
    }`;
  };

  const onPressButton = () => {
    if (email.trim().length === 0 || contra.length === 0) {
      Alert.alert(
        "No se pudo iniciar sesión",
        "Los campos no pueden estar vacíos.",
      );
      return;
    }

    if (!validarEmail(email.trim())) {
      Alert.alert(
        "Email inválido",
        "El correo debe tener el formato correcto.",
      );
      return;
    }

    const errorContra = validarContra(contra);
    if (errorContra) {
      Alert.alert("Contraseña inválida", errorContra);
      return;
    }

    Alert.alert("Éxito", "Inicio de sesión exitoso");
    setEmail("");
    setContra("");

    router.push({
      pathname: "/home",
    });
  };

  return (
    <View style={styles.container}>
      <Text>Iniciar sesión</Text>

      <Image
        source={{
          uri: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/arataki-itto/sticker_8.png?40f9cf15df0130422d941d383a8dceb0&d=200x200",
        }}
        style={styles.imagen}
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Correo"
      />

      <TextInput
        style={styles.input}
        value={contra}
        onChangeText={setContra}
        placeholder="Contraseña"
        secureTextEntry
      />

      <Button title="Aceptar" onPress={onPressButton} />
      {/* <Button title="Registro" onPress={onRegister} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    padding: 8,
    width: 220,
    marginVertical: 12,
  },

  imagen: {
    width: 150,
    height: 150,
    resizeMode: "contain", // escala la imagen proporcionalmente si las dimensiones no coinciden
  },
});

// PRÁCTICA ANTERIOR -------------------------------------------

// import {
//   Text,
//   View,
//   StyleSheet,
//   Switch,
//   TextInput,
//   Button,
//   Alert,
// } from "react-native";
// import { useState } from "react";

// export default function Index() {
//   const [switchValue, setSwitchValue] = useState(false);
//   const [text, setText] = useState("");

//   const onChangeSwitch = (value: boolean) => {
//     console.warn("switch value changed to = ", value);
//     setSwitchValue(value);
//   };

//   const onPressButton = () => {
//     Alert.alert(text, "fue lo que se escribió");
//   };

//   return (
//     <View style={styles.container}>
//       {/* <Text>Edit src/app/index.tsx to edit this screen.</Text> */}

//       <TextInput
//         style={styles.input}
//         value={text}
//         onChangeText={setText}
//         placeholder="..."
//       />

//       <Switch value={switchValue} onValueChange={onChangeSwitch} />

//       <Button title="Aceptar" onPress={onPressButton} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: "#999",
//     borderRadius: 6,
//     padding: 8,
//     width: 220,
//     marginVertical: 12,
//   },
// });
