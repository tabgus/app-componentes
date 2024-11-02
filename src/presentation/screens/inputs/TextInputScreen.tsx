import React, {useContext, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Title} from '../../components/Title';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {globalStyles} from '../../../config/theme';
import {ThemeContext} from '../../context/ThemeContext';

export const TextInputScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [form, setForm] = useState({name: '', email: '', phone: ''});
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustomView margin>
          <Title text="Text Input" safe />
          <Card>
            <TextInput
              style={[
                globalStyles.input,
                {backgroundColor: colors.background, color: colors.text},
              ]}
              placeholder="Nombre"
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
            />
            <TextInput
              style={[
                globalStyles.input,
                {backgroundColor: colors.background, color: colors.text},
              ]}
              placeholder="Email"
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({...form, email: value})}
            />
            <TextInput
              style={[
                globalStyles.input,
                {backgroundColor: colors.background, color: colors.text},
              ]}
              placeholder="Email"
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>
          <View style={{height: 10}} />
          <Card>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
          </Card>
          <View style={{height: 50}} />
          <Card>
            <TextInput
              style={[
                globalStyles.input,
                {backgroundColor: colors.background, color: colors.text},
              ]}
              placeholder="Email"
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>
        </CustomView>
        <View style={{height: 50}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
