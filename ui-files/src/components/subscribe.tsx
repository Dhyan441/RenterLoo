const TextInput: React.FC = () => {
  return (
    <input
      type="text"
      style={{
        width: '300px', // You can adjust the width as needed
        height: '40px', // You can adjust the height as needed
        borderRadius: '10px', // Rounded edges
        backgroundColor: 'grey', // Grey background color
        border: 'none', // Remove default border
        padding: '8px', // Add some padding for spacing
      }}
      placeholder="Enter text..."
    />
  );
};

export default TextInput;