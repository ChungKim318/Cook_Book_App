const formatText = (text = '') => {
  return text.length > 20 ? text.substring(0, 20) + '...' : text;
};

export default formatText;
