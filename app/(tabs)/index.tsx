import React from 'react';
import { Dimensions, Image, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const { width } = Dimensions.get('window'); // Mengambil lebar layar untuk responsivitas

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.userCompany}>PT. Appsensi Tiga Ribu</Text>
          <Text style={styles.userName}>Aprilia Appsensi</Text>
          <Text style={styles.userRole}>Product Manager</Text>
        </View>
        <Image
          source={require('@/assets/images/icon.png')} // Replace with your user image path
          style={styles.userImage}
        />
      </View>

      {/* Today's Attendance */}
      <View style={styles.attendanceContainer}>
        <View style={styles.attendanceCard}>
          <Text style={styles.attendanceLabel}>CHECK IN</Text>
          <Text style={styles.attendanceTime}>07:35:07 WIB</Text>
        </View>
        <View style={styles.attendanceCard}>
          <Text style={styles.attendanceLabel}>CHECK OUT</Text>
          <Text style={styles.attendanceTime}>18:05:07 WIB</Text>
        </View>
      </View>

      {/* Features Grid */}
      <View style={styles.featuresGrid}>
        {[
          { label: 'Attendance', icon: require('@/assets/images/react-logo.png') },
          { label: 'Activity', icon: require('@/assets/images/react-logo.png') },
          { label: 'Leave', icon: require('@/assets/images/react-logo.png') },
          { label: 'Assignment', icon: require('@/assets/images/react-logo.png') },
          { label: 'Overtime', icon: require('@/assets/images/react-logo.png') },
          { label: 'Claim', icon: require('@/assets/images/react-logo.png') },
          { label: 'Payslip', icon: require('@/assets/images/react-logo.png') },
          { label: 'More', icon: require('@/assets/images/react-logo.png') },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.featureButton}>
            <Image source={item.icon} style={styles.featureIcon} />
            <Text style={styles.featureLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Attendance */}
      <View style={styles.recentAttendance}>
        <Text style={styles.recentTitle}>Attendance</Text>
        <View style={styles.attendanceDetails}>
          <Text style={styles.dateText}>Yesterday (25 January 2023)</Text>
          <Text style={styles.statusText}>Present</Text>
        </View>
        <View style={styles.attendanceTimes}>
          <View>
            <Text style={styles.checkLabel}>CHECK IN</Text>
            <Text style={styles.checkTime}>08:45:07 WIB</Text>
          </View>
          <View>
            <Text style={styles.checkLabel}>CHECK OUT</Text>
            <Text style={styles.checkTime}>17:35:57 WIB</Text>
          </View>
        </View>
      </View>

      {/* Additional Card */}
      <View style={styles.additionalCard}>
        <Text style={styles.additionalTitle}>Important Notice</Text>
        <Text style={styles.additionalContent}>
          Please complete your timesheet by 5 PM today to avoid missing deadlines.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FB',
  },
  header: {
    backgroundColor: '#A1CEDC',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  userInfo: {
    flex: 1,
  },
  userCompany: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userRole: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  attendanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 16,
  },
  attendanceCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    alignItems: 'center',
    width: width * 0.4, // Responsif terhadap lebar layar
  },
  attendanceLabel: {
    fontSize: 12,
    color: '#888888',
  },
  attendanceTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 16,
  },
  featureButton: {
    alignItems: 'center',
    marginBottom: 16,
    width: '20%',
  },
  featureIcon: {
    width: 40,
    height: 40,
  },
  featureLabel: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
    color: '#333333',
  },
  recentAttendance: {
    margin: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  attendanceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dateText: {
    fontSize: 12,
    color: '#888888',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  attendanceTimes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkLabel: {
    fontSize: 12,
    color: '#888888',
  },
  checkTime: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  additionalCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  additionalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FF5722',
  },
  additionalContent: {
    fontSize: 14,
    color: '#333333',
  },
});
