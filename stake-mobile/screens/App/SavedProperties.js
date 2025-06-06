import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useSelector } from "react-redux"
import Header from "../../components/Header"
import PropertyCard from "../../components/PropertyCard"

const SavedProperties = ({ navigation }) => {
  const language = useSelector((state) => state.user.language)
  const properties = useSelector((state) => state.properties.list)
  const savedPropertyIds = useSelector((state) => state.properties.saved)

  const savedProperties = properties.filter((property) => savedPropertyIds.includes(property.id))

  return (
    <SafeAreaView style={styles.container}>
      <Header title={language.data.saved.title} showBack={true} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {savedProperties.length > 0 ? (
          savedProperties.map((property) => (
            <View key={property.id} style={styles.propertyCardWrapper}>
              <PropertyCard
                data={property}
                onPress={() => navigation.navigate("Property", { propertyId: property.id })}
              />
            </View>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Feather name="bookmark" size={60} color="#94a3b8" />
            <Text style={styles.emptyTitle}>{language.data.saved.empty}</Text>
            <Text style={styles.emptySubtitle}>{language.data.saved.p}</Text>
            <TouchableOpacity style={styles.browseButton} onPress={() => navigation.navigate("PropertiesTab")}>
              <Text style={styles.browseButtonText}>{language.data.saved.button}</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  scrollContainer: {
    padding: 16,
  },
  propertyCardWrapper: {
    marginBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0a1930",
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  browseButton: {
    backgroundColor: "#0a1930",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  browseButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default SavedProperties
