import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useCavy, wrap } from 'cavy';

class ClassButton extends React.Component {
  render() {
    const { title, onPress } = this.props;
    return <Button title={title} onPress={onPress} />;
  }
}
const FunctionButtonCore = ({ onPress, title }) => (
  <Button title={title} onPress={onPress} />
);

const FunctionButton = wrap(FunctionButtonCore);

const WrapExample = () => {
  const [classButtonOn, setClassButtonOn] = useState(false);
  const [functionButtonOn, setFunctionButtonOn] = useState(false);

  const generateTestHook = useCavy();

  return (
    <View style={styles.container}>
      {/* Class implementation */}
      <ClassButton
        ref={generateTestHook('ClassButton')}
        title={`Class Button is ${classButtonOn ? 'on' : 'off'}`}
        onPress={() => setClassButtonOn(!classButtonOn)}
      />
      {classButtonOn && (
        <Text ref={generateTestHook('ClassText')}>Class Button is on</Text>
      )}

      {/* Function implementation */}
      <FunctionButton
        ref={generateTestHook('FunctionButton')}
        title={`Function Button is ${functionButtonOn ? 'on' : 'off'}`}
        onPress={() => setFunctionButtonOn(!functionButtonOn)}
      />
      {functionButtonOn && (
        <Text ref={generateTestHook('FunctionText')}>
          Function Button is on
        </Text>
      )}
    </View>
  );
};

export default WrapExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
