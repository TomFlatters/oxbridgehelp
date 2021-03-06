const oxfordCourses = [
	{name: "Archaeology and Anthropology"},
	{name: "Biochemistry (Molecular and Cellular)"},
	{name: "Biology"},
	{name: "Biomedical Sciences"},
	{name: "Chemistry"},
	{name: "Classical Archaeology and Ancient History"},
	{name: "Classics"},
	{name: "Classics and English"},
	{name: "Classics and Modern Languages"},
	{name: "Classics and Oriental Studies"},
	{name: "Computer Science"},
	{name: "Computer Science and Philosophy"},
	{name: "Earth Sciences (Geology)"},
	{name: "Economics and Management"},
	{name: "Engineering Science"},
	{name: "English and Modern Languages"},
	{name: "English Language and Literature"},
	{name: "English and Middle Eastern Languages"},
	{name: "Fine Art"},
	{name: "Geography"},
	{name: "History"},
	{name: "History (Ancient and Modern)"},
	{name: "History and Economics"},
	{name: "History and English"},
	{name: "History and Modern Languages"},
	{name: "History and Politics"},
	{name: "History of Art"},
	{name: "Human Sciences"},
	{name: "Law (Jurisprudence)"},
	{name: "Materials Science"},
	{name: "Mathematics"},
	{name: "Mathematics and Computer Science"},
	{name: "Mathematics and Philosophy"},
	{name: "Mathematics and Statistics"},
	{name: "Medicine"},
	{name: "Modern Languages"},
	{name: "Modern Languages and Linguistics"},
	{name: "Music"},
	{name: "Oriental Studies"},
	{name: "Philosophy and Modern Languages"},
	{name: "Philosophy and Theology"},
	{name: "Philosophy, Politics and Economics (PPE)"},
	{name: "Physics"},
	{name: "Physics and Philosophy"},
	{name: "Experimental Psychology"},
	{name: "Psychology, Philosophy and Linguistics"},
	{name: "Religion and Oriental Studies"},
	{name: "Theology and Religion"},
];

const cambridgeCourses = [
	{name: "Anglo-Saxon, Norse, and Celtic"},
	{name: "Archaeology"},
	{name: "Architecture"},
	{name: "Asian and Middle Eastern Studies"},
	{name: "Chemical Engineering"},
	{name: "Classics"},
	{name: "Computer Science"},
	{name: "Economics"},
	{name: "Education"},
	{name: "Engineering"},
	{name: "English"},
	{name: "Geography"},
	{name: "History"},
	{name: "History and Modern Languages"},
	{name: "History and Politics"},
	{name: "History of Art"},
	{name: "Human, Social, and Political Sciences (HSPS)"},
	{name: "Land Economy"},
	{name: "Law"},
	{name: "Linguistics"},
	{name: "Mathematics"},
	{name: "Medicine"},
	{name: "Modern and Medieval Languages"},
	{name: "Music"},
	{name: "Natural Sciences"},
	{name: "Philosophy"},
	{name: "Psychological and Behavioural Sciences (PBS)"},
	{name: "Theology, Religion, and Philosophy of Religion"},
	{name: "Veterinary Medicine"},
];

// For both Camoptions and oXoptions:
//   array of {value: a, label: b} where a is what is used in link targets, and b is the string displayed to user

export const Camoptions = [];
for (var i=0; i< cambridgeCourses.length; i++){
  const value = cambridgeCourses[i]["name"];
  Camoptions.push({value: value.replace(/\s+/g, '-').replace(/[()]/g, '').toLowerCase(), label: value})
}

export const oXoptions = [];
for (var i=0; i< oxfordCourses.length; i++){
  var value = oxfordCourses[i]["name"];
  oXoptions.push({value: value.replace(/\s+/g, '-').replace(/[()]/g, '').toLowerCase(), label: value})
}
