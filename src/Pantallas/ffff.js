import ComboBox from 'react-native-combobox';

const [selectedValue, setSelectedValue] = useState('');
    
    const values = [
        'option 1',
        'option 2',
        'option 3',
        'option 4',
        'option 5'
    ];
 
    return (
        <View style={{ flex: 1, paddingVertical: 80, paddingHorizontal: 40, justifyContent: 'space-between' }}>
            <ComboBox
                values={values}
                onValueSelect={setSelectedValue}
            />
            <Text>selected value:          {values[selectedValue]}</Text>
        </View>
    );