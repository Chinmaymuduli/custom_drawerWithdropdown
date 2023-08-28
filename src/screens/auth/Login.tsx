import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import React, {useState} from 'react';
import {
  Box,
  Center,
  FormControl,
  Image,
  Input,
  Modal,
  Text,
  VStack,
  Button,
  ScrollView,
  useToast,
} from 'native-base';
import {COLORS} from '~/styles';

const Login = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const toast = useToast();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        _contentContainerStyle={{pb: 7}}
        keyboardShouldPersistTaps={'always'}>
        <Box px={8} mt={20}>
          {/* <Center>
            <Image
              source={IMAGES.LOGO}
              alt="logo"
              style={{
                width: 200,
                height: 130,
              }}
              resizeMode={'contain'}
            />
          </Center> */}
          <Box mt={10}>
            <Box>
              <Text fontSize={30} fontFamily={'Montserrat-Bold'}>
                Welcome,
              </Text>
              <Text fontFamily={'Montserrat-Medium'}>
                Please enter your credential to continue.
              </Text>
            </Box>
            <VStack mt={7} space={2}>
              <Text fontWeight={'medium'} fontSize={15}>
                ID
              </Text>
              <FormControl isRequired isInvalid={'ID' in errors} mt={1}>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      placeholder="Enter your ID"
                      borderRadius={8}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholderTextColor={'#000'}
                      fontSize={14}
                      backgroundColor={'#fff'}
                      borderWidth={2}
                      autoCapitalize={'none'}
                      mt={1}
                    />
                  )}
                  name="ID"
                  rules={{
                    required: '*ID is required',
                  }}
                  defaultValue=""
                />
                <FormControl.ErrorMessage>
                  {errors.ID?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            </VStack>
            <VStack mt={7} space={2}>
              <Text fontWeight={'medium'} fontSize={15}>
                Password
              </Text>
              <FormControl isRequired isInvalid={'password' in errors} mt={1}>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      placeholder="Enter your Password"
                      borderRadius={8}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholderTextColor={'#000'}
                      fontSize={14}
                      backgroundColor={'#fff'}
                      borderWidth={2}
                      autoCapitalize={'none'}
                      secureTextEntry={showPassword ? true : false}
                      mt={1}
                      //   InputRightElement={
                      //     <Box mr={2}>
                      //       <Ionicons
                      //         name={showPassword ? 'eye' : 'eye-off'}
                      //         size={25}
                      //         onPress={() => setShowPassword(!showPassword)}
                      //       />
                      //     </Box>
                      //   }
                    />
                  )}
                  name="password"
                  rules={{
                    required: '*Password is required',
                  }}
                  defaultValue=""
                />
                <FormControl.ErrorMessage>
                  {errors.password?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            </VStack>
          </Box>
          <Box mt={9}>
            <Button
              //   isLoading={isLoading}
              //   isDisabled={isLoading ? true : false}
              colorScheme={COLORS.primary}
              bgColor={COLORS.primary}
              borderRadius={8}
              _text={{fontWeight: 'bold', color: '#fff'}}
              onPress={handleSubmit(onSubmit)}>
              Continue
            </Button>
          </Box>
        </Box>
      </ScrollView>

      {/* Modal */}
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="flex-end"
        bottom="4"
        size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Forgot Password?</Modal.Header>
          <Modal.Body>
            Enter email address and we'll send a link to reset your password.
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 20,
    marginTop: 25,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    paddingVertical: 12,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  bgImage: {
    flex: 1,
  },
});
