import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Register() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [contrasena2, setContrasena2] = useState("");

    const validarEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validarContra = (contra: string, contra2: string): string | null => {
        const mensajesError: string[] = [];
        if (contra.length < 8)
            mensajesError.push("La contraseña debe tener al menos 8 caracteres.");
        if (!/[A-Z]/.test(contra))
            mensajesError.push("La contraseña debe tener al menos una mayúscula.");
        if (!/[a-z]/.test(contra))
            mensajesError.push("La contraseña debe tener al menos una minúscula.");
        if (!/[@$?!<>+._\-]/.test(contra))
            mensajesError.push(
                "La contraseña debe tener al menos un carácter especial.",
            );
        if (contra !== contra2)
            mensajesError.push("Ambas contraseñas deben ser iguales.");

        return mensajesError.length > 0 ? mensajesError.join(" \n") : null;
    };

    const onPressButton = () => {
        if (
            email.trim().length === 0 ||
            contrasena.length === 0 ||
            usuario.length === 0 ||
            contrasena2.length === 0
        ) {
            Alert.alert(
                "No se pudo completar el registro",
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

        const errorContra = validarContra(contrasena, contrasena2);
        if (errorContra) {
            Alert.alert("Contraseña inválida", errorContra);
            return;
        }

        Alert.alert("Éxito", "Registro exitoso");
        setEmail("");
        setUsuario("");
        setContrasena("");
        setContrasena2("");


        router.push({
            pathname: "/",
        });
    };

    return (
        <View style={styles.container}>
            <Text>Registro</Text>

            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Correo"
            />

            <TextInput
                style={styles.input}
                value={usuario}
                onChangeText={setUsuario}
                placeholder="Usuario"
            />

            <TextInput
                style={styles.input}
                value={contrasena}
                onChangeText={setContrasena}
                placeholder="Contraseña"
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                value={contrasena2}
                onChangeText={setContrasena2}
                placeholder="Vuelve a ingresar tu contraseña"
                secureTextEntry
            />

            <Button title="Registrar" onPress={onPressButton} />
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
});
