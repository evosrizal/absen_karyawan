import { StyleSheet, View, FlatList, TouchableOpacity, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

const settingsOptions = [
  { id: '1', label: 'Edit Profile', icon: 'user.edit', action: () => console.log('Edit Profile') },
  { id: '2', label: 'Notifications', icon: 'bell', action: () => console.log('Notifications') },
  { id: '3', label: 'Privacy & Security', icon: 'lock', action: () => console.log('Privacy & Security') },
  { id: '4', label: 'Language', icon: 'globe', action: () => console.log('Language') },
  { id: '5', label: 'About', icon: 'info.circle', action: () => console.log('About') },
  { id: '6', label: 'Log Out', icon: 'sign-out', action: () => console.log('Log Out') },
];

export default function AccountSettingsScreen() {
  const renderSettingItem = ({ item }) => (
    <TouchableOpacity style={styles.settingItem} onPress={item.action}>
      <IconSymbol name={item.icon} size={24} color="#808080" style={styles.settingIcon} />
      <ThemedText type="default" style={styles.settingLabel}>
        {item.label}
      </ThemedText>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerContainer}>
        <IconSymbol
          size={100}
          color="#808080"
          name="user.circle"
          style={styles.profileIcon}
        />
        <ThemedText type="title" style={styles.username}>
          Rizal Amini
        </ThemedText>
      </View>

      <FlatList
        data={settingsOptions}
        renderItem={renderSettingItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileIcon: {
    marginBottom: 16,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingVertical: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: Platform.OS === 'ios' ? '#000' : 'transparent',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingIcon: {
    marginRight: 16,
  },
  settingLabel: {
    fontSize: 16,
  },
});
