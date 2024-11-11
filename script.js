// Define the correct answers based on row and column criteria for each cell
const correctAnswers = {
    "cell-1-1": ["Rafael Nadal"],
    "cell-1-2": ["Rafael Nadal", "Novak Djoković", "Dominic Thiem", "Daniil Medvedev", "Carlos Alcaraz", "Jannik Sinner", "Stan Wawrinka", "Marin Čilić"],
    "cell-1-3": ["Alexander Zverev"],
    "cell-2-1": ["Ugo Humbert", "Jack Draper", "Ben Shelton", "Alejandro Tabilo", "Juncheng Shang", "Adrian Mannarino", "Cameron Norrie", "Facundo Díaz Acosta", "Corentin Moutet", "Yoshihito Nishioka", "Hugo Gaston", "Dominik Koepfer", "Thiago Monteiro"],
    "cell-2-2": ["Novak Djoković", "Dominic Thiem", "Daniil Medvedev", "Carlos Alcaraz", "Jannik Sinner", "Stan Wawrinka", "Marin Čilić"],
    "cell-2-3": ["Alexander Zverev", "Jan Lennard Struff", "Dominik Koepfer", "Yannick Hanfmann"],
    "cell-3-1": ["Ugo Humbert", "Jack Draper", "Ben Shelton", "Alejandro Tabilo", "Juncheng Shang", "Adrian Mannarino", "Cameron Norrie", "Facundo Díaz Acosta", "Corentin Moutet", "Yoshihito Nishioka", "Denis Shapovalov", "Hugo Gaston", "Dominik Koepfer", "Thiago Monteiro"],
    "cell-3-2": ["Novak Djoković", "Daniil Medvedev", "Carlos Alcaraz", "Jannik Sinner"],
    "cell-3-3": ["Alexander Zverev", "Jan Lennard Struff", "Dominik Koepfer", "Yannick Hanfmann", "Daniel Altmaier"]
};

// Define the list of all possible player names
const allPlayers = [
    "Jannik Sinner", "Alexander Zverev", "Carlos Alcaraz", "Daniil Medvedev", "Taylor Fritz",
    "Novak Djoković", "Casper Ruud", "Andrey Rublev", "Alex de Minaur", "Grigor Dimitrov",
    "Stefanos Tsitsipas", "Tommy Paul", "Holger Rune", "Ugo Humbert", "Jack Draper",
    "Hubert Hurkacz", "Lorenzo Musetti", "Frances Tiafoe", "Karen Khachanov", "Arthur Fils",
    "Ben Shelton", "Alejandro Tabilo", "Sebastian Korda", "Alexei Popyrin", "Tomáš Macháč",
    "Jordan Thompson", "Sebastián Báez", "Jiří Lehečka", "Félix Auger-Aliassime",
    "Francisco Cerúndolo", "Giovanni Mpetshi Perricard", "Flavio Cobolli", "Nuno Borges",
    "Alexander Bublik", "Matteo Berrettini", "Nicolás Jarry", "Brandon Nakashima",
    "Matteo Arnaldi", "Tomás Martín Etcheverry", "Tallon Griekspoor", "Alex Michelsen",
    "Pedro Martínez", "Jan Lennard Struff", "Luciano Darderi", "Zhizhen Zhang",
    "Roberto Bautista Agut", "Marcos Giron", "Mariano Navone", "Jakub Menšík",
    "Cameron Norrie", "Juncheng Shang", "David Goffin", "Lorenzo Sonego", "Miomir Kecmanović",
    "Gaël Monfils", "Roberto Carballés Baena", "Fábián Marozsán", "Arthur Rinderknech",
    "Roman Safiullin", "Zizou Bergs", "Denis Shapovalov", "Alejandro Davidovich Fokina",
    "Jaume Munar", "Facundo Díaz Acosta", "Arthur Cazaux", "Christopher O'Connell",
    "Yunchaokete Bu", "Adrian Mannarino", "Corentin Moutet", "Alexandre Müller",
    "Aleksandar Vukic", "Yoshihito Nishioka", "Rinky Hijikata", "Hugo Gaston",
    "Thiago Seyboth Wild", "James Duckworth", "Thanasi Kokkinakis", "Quentin Halys",
    "Alexander Shevchenko", "Botic van de Zandschulp", "Dušan Lajović", "Fabio Fognini",
    "Pavel Kotov", "Benjamin Bonzi", "Sebastian Ofner", "Daniel Altmaier", "Adam Walton",
    "Otto Virtanen", "Aleksandar Kovačević", "Sumit Nagal", "Emil Ruusuvuori",
    "Gabriel Diallo", "Yannick Hanfmann", "Dominik Koepfer", "Taro Daniel",
    "Jacob Fearnley", "Borna Ćorić", "Lucas Pouille", "Thiago Monteiro", "Márton Fucsovics",
    "Federico Coria", "Max Purcell", "Mattia Bellucci", "Francisco Comesaña",
    "Damir Džumhur", "Camilo Ugo Carabelli", "Luca Nardi", "Jesper de Jong",
    "Hamad Medjedović", "Mikhail Kukushkin", "Francesco Passaro", "Laslo Djere",
    "Harold Mayot", "Christopher Eubanks", "Alexander Ritschard", "Chun Hsin Tseng",
    "Kamil Majchrzak", "Nicolas Moreno De Alboran", "Jaime Faria", "Duje Ajduković",
    "Learner Tien", "Thiago Agustín Tirante", "Kei Nishikori", "Jozef Kovalík",
    "Billy Harris", "Hugo Dellien", "Daniel Elahi Galán", "Luca Van Assche",
    "Valentin Vacherot", "Mackenzie McDonald", "Richard Gasquet", "Lloyd Harris",
    "Leandro Riedi", "Jérôme Kym", "Román Andrés Burruchaga", "Lukáš Klein",
    "Federico Agustin Gomez", "Facundo Bagnis", "Marco Trungelliti", "Raphaël Collignon",
    "Matteo Gigante", "Yasutaka Uchiyama", "Juan Manuel Cerúndolo", "Pierre Hugues Herbert",
    "Mitchell Krueger", "Seongchan Hong", "Vít Kopřiva", "Cristian Garín",
    "Joao Fonseca", "Albert Ramos Viñolas", "Tomás Barrios Vera", "Maximilian Marterer",
    "Radu Albot", "Rafael Nadal", "Hugo Grenier", "Terence Atmane", "Marc-Andrea Hüsler",
    "Coleman Wong", "Tristan Boyer", "Stan Wawrinka", "Alejandro Moro Cañas",
    "Martin Landaluce", "Daniel Evans", "Felipe Meligeni Alves", "Elmer Møller",
    "Gustavo Heide", "Henrique Rocha", "Zachary Svajda", "Alex Bolt", "Grégoire Barrère",
    "Stefano Napolitano", "Tristan Schoolkate", "Titouan Droguet", "Juan Pablo Ficovich",
    "Nishesh Basavareddy", "Dmitry Popko", "Sho Shimabukuro", "Li Tu", "Patrick Kypson",
    "Jan Choinski", "Omar Jasika", "Gijs Brouwer", "Paul Jubb", "Marin Čilić",
    "Henri Squire", "Maks Kaśnikowski", "Vilius Gaubas", "Murkel Dellien",
    "Alibek Kachmazov", "Mattéo Martineau", "Valentin Royer", "Clément Chidekh",
    "James Trotter", "August Holmgren", "Timofey Skatov", "Carlos Taberner",
    "Jurij Rodionov", "Constant Lestienne", "Facundo Mena", "Brandon Holt",
    "Pablo Carreño Busta", "Andrea Collarini", "Bernard Tomic", "Denis Yevseyev",
    "Adrian Andreev", "Enzo Couacaud", "Antoine Escoffier", "Nick Hardt",
    "Juan Pablo Varillas", "Aziz Dougaz", "Filip Jianu", "Javier Barranco Cosano",
    "Emilio Nava", "Nikoloz Basilashvili", "Yuta Shimizu", "Alexis Galarneau",
    "Nicolás Mejía", "Stefano Travaglia", "Oriol Roca Batalla", "Tung Lin Wu",
    "Ignacio Buse", "Ugo Blanchet", "Mark Lajal", "Maxime Cressy", "Gianluca Mager",
    "Santiago Taverna", "Adolfo Daniel Vallejo", "Michael Mmoh", "Khumoyun Sultanov",
    "Federico Arnaboldi", "Eliot Spizzirri", "Andrés Andrade", "Giulio Zeppieri",
    "Milos Raonic", "Yu-hsiou Hsu", "Gonzalo Oliveira", "Calvin Hémery", 
    "Beibit Zhukayev", "Gonzalo Bueno", "Ethan Quinn", "Jay Clarke", "Zsombor Piros",
    "Shintaro Mochizuki", "Daniel Rincon", "Yan Bai", "Benjamin Hassan",
    "Andrea Pellegrino", "Abdullah Shelbayh", "Alexander Blockx", "Marc Polmans",
    "Edas Butvilas", "Samuel Vincent Ruggeri", "Andrea Vavassori", "Dalibor Svrčina",
    "Manuel Guinard", "Lukas Neumayer", "Rudolf Molleker", "J.J. Wolf",
    "James McCabe", "Álvaro Guillén Meza", "Gauthier Onclin", "Pol Martín Tiffon",
    "Denis Kudla", "Daniel Masur", "Robin Bertrand", "Yosuke Watanuki", 
    "Maxime Janvier", "Karue Sell", "Matej Dodig", "Geoffrey Blancaneaux",
    "Charles Broom", "Gabriel Debru", "Lorenzo Giustino", "Juan Carlos Prado Angelo",
    "Jules Marie", "Kyrian Jacquet", "Fajing Sun", "Max Hans Rehberg",
    "Enrico Dalla Valle", "Filip Misolic", "Bernabé Zapata Miralles", "Mateus Alves",
    "Hady Habib", "Juan Bautista Torres", "Pablo Llamas Ruiz", "Rio Noguchi",
    "Giovanni Fonio", "Francesco Maestrelli", "Pedro Cachín", "Cezar Crețu",
    "Aslan Karatsev", "Matheus Pucinelli De Almeida", "Jelle Sels",
    "Remy Bertola", "Mili Poljičak", "Matías Soto", "Pedro Sakamoto",
    "Reilly Opelka", "Benoît Paire", "Corentin Denolly", "Michael Geerts",
    "Max Houkes", "Marek Gengel", "Dominic Stricker", "Hazem Naw", "Ergi Kırkın",
    "Gastão Elias", "Ivan Gakhov", "Martin Damm", "Ramkumar Ramanathan",
    "Martin Kližan", "Alexey Zakharov", "Guy Den Ouden", "Daniel Mérida",
    "Elias Ymer", "Jakub Nicod", "Carlos Sánchez Jover", "Mathys Erhard",
    "Dino Prižmić", "Michael Vrbenský", "Ričardas Berankis", "Marat Sharipov",
    "Liam Draxl", "Daniel Dutra da Silva", "Clément Tabur", "Vadym Ursu",
    "Jacopo Berrettini", "Joris De Loore", "Arthur Géa", "Egor Gerasimov",
    "Murphy Cassone", "Oleksandr Ovcharenko", "Andrea Picchione", "Sandro Kopp",
    "Jiří Veselý", "Benjamin Lock", "Dane Sweeny", "Alexey Vatutin",
    "Renzo Olivo", "Soonwoo Kwon", "Genaro Alberto Olivieri", "Philip Sekulic",
    "Nicola Kuhn", "Dennis Novak", "Stefan Kozlov", "Joel Schwärzler",
    "Jie Cui", "Kyle Edmund", "Evgenii Tiurnev", "Masamichi Imamura",
    "Toby Kodat", "Blake Ellis", "Nikolás Sánchez Izquierdo", "Maxime Chazal",
    "Franco Roncadelli", "Jonáš Forejtek", "Alex Martí Pujolras",
    "Matthew Dellavedova", "Gabi Adrian Boitan", "Luka Pavlovic",
    "Kris Van Wyk", "Diego Schwartzman", "Yi Zhou", "Johannus Monday",
    "Ilia Simakin", "Mukund Sasikumar", "David Jordá Sanchis", "Marco Cecchinato",
    "Nicolás Álvarez Varona", "Andre Ilagan", "Philip Henning", "Miguel Damas",
    "Gerard Campana Lee", "Jakub Paul", "Valerio Aboian", "Dimitar Kuzmanov",
    "Alejo Lorenzo Lingua Lavallén", "Frederico Ferreira Silva", "Kaichi Uchida",
    "Naoki Nakagawa", "Alexander Weis", "Nicholas David Ionel", "Colton Smith",
    "Oleg Prihodko", "Omni Kumar", "Lilian Marmousez", "Gonzalo Villanueva",
    "Luka Mikrut", "Jack Pinnington Jones", "Thai Son Kwiatkowski", "Bor Artnak",
    "Justin Engel", "Oliver Crawford", "Zdeněk Kolář", "Arthur Bouquier",
    "Nerman Fatić", "Saba Purtseladze", "Giles Hussey", "Daniel Michalski",
    "Ryan Nijboer", "Christoph Negritu", "Yibing Wu", "Shintaro Imai",
    "Hynek Bartoň", "Eliakim Coulibaly", "Luciano Emanuel Ambrogi", "Chris Rodesch",
    "Raúl Brancaccio", "Ryan Seggerman", "Lautaro Midon", "João Lucas Reis Da Silva",
    "Hiroki Moriya", "Bogdan Bobrov", "Kilian Feldbausch", "Evgeny Karlovskiy",
    "Roberto Cid Subervi", "Kasidit Samrej", "Michael Agwi", "Rodrigo Pacheco Mendez",
    "Petr Bar Biryukov", "Tom Gentzsch", "Norbert Gombos", "Felix Gill",
    "Bruno Kuzuhara", "Sebastian Fanselow", "Anton Matusevich", "Vitaliy Sachko",
    "Laurent Lokoli", "Gabriele Pennaforti", "Viktor Durasovic", "Petr Nesterov",
    "Franco Agamenone", "Stefan Popović", "Neil Oberleitner", "Aidan Mayo",
    "Mika Brunold", "Miloš Karol", "Adria Soriano Barrera", "Tristan Lamasine",
    "Tommaso Compagnucci", "Borna Gojo", "Robert Strombachs", "Hernán Casanova",
    "Marko Topo", "Alessandro Pecci", "Lucas Poullain", "Tomás Farjat",
    "Carlos Lopez Montagud", "Kokoro Isomura", "Yurii Dzhavakian",
    "Evgeny Donskoy", "Alberto Barroso Campos", "Arthur Fery", "Tim Handel",
    "Max Alcalá Gurri", "Govind Nanda", "Ernesto Escobedo", "Sascha Gueymard Wayenburg",
    "Marvin Möller", "Lukáš Pokorný", "Gabriele Piraino", "Yishai Oliel",
    "Alex Molčan", "Hikaru Shiraishi", "Christian Langmo", "Orlando Luz",
    "Giovanni Oradini", "Pedro Araújo", "Dan Alexandru Tomescu", "Alafia Ayeni",
    "Moez Echargui", "Peter Bertran", "Kiranpal Pannu", "Marcello Serafini",
    "Aleksandre Bakshi", "Takuya Kumasaka", "Dan Added", "Riccardo Bonadio",
    "Ryan Peniston", "Pawel Juszczak", "Lucas Gerch", "Gianluca Cadenasso",
    "Egor Agafonov", "Max Wiskandt", "Mathias Bourgue", "Yanaki Milev",
    "Daniil Glinka", "Guido Iván Justo", "Harrison Adams", "Blaise Bicknell",
    "Jacob Bradshaw", "Michiel De Krom", "Damien Wenger", "Alexis Gautier",
    "Florent Bax", "Andrew Paulson", "Tyler Zink", "Aidan McHugh",
    "Mariano Kestelboim", "Altuğ Çelikbilek", "Stefanos Sakellaridis", "Duarte Vale",
    "Micah Braswell", "Alastair Gray", "Stefan Palosi", "Tennys Sandgren",
    "Andrej Martin", "Andrea Guerrieri", "José Pereira", "Orel Kimhi",
    "Imanol López Morillo", "Ryuki Matsuda", "Nino Serdarušić", "Henry Searle",
    "Svyatoslav Gulin", "Kimmer Coppejans", "Karan Singh", "Stijn Slump",
    "Yusuke Takahashi", "Emile Hudd", "Kirill Kivattsev", "Dominic Thiem",
    "Patrick Maloney", "Stuart Parker", "Pedro Boscardin Dias", "Nikolay Vylegzhanin",
    "Niels Visker", "Eric Vanshelboim", "Daniel Cukierman", "João Domingues",
    "Mats Rosenkranz", "Lucas Bouquet", "Yankı Erel", "Federico Iannaccone",
    "Sergey Fomin", "Blake Mott", "Viacheslav Bielinskyi", "Garrett Johns",
    "Mohamed Safwat", "Facundo Juárez", "Illya Marchenko", "Carlos Gimeno Valero",
    "Jake Delaney", "Tiago Pereira", "Liam Broady", "Julio César Porras",
    "Leo Borg", "Peter Fajta", "Keegan Smith", "Ryotaro Taguchi", "João Eduardo Schiessl",
    "Patrick Zahraj", "Cannon Kingsley", "Martin Krumich", "Oleksii Krutykh",
    "Alejo Sanchez Quilez", "Andres Martin", "Ilya Snițari", "Leonardo Aboian",
    "Woobin Shin", "Sanhui Shin", "Liam Gavrielides", "Mirza Bašić", 
    "Diego Augusto Barreto Sánchez", "Igor Gimenez", "Dominik Kellovský",
    "Gilbert Klier Junior", "João Sousa", "Maximilian Neuchrist", "Radu Mihai Papoe",
    "Edoardo Lavagno", "Lorenzo Joaquín Rodríguez", "Alex Martinez", "George Loffhagen",
    "Hamish Stewart", "Alex Rybakov", "Filip Peliwo", "Ajeet Rai",
    "Juan Pablo Paz", "Moerani Bouzige", "Nam Hoang Ly", "Louis Weßels",
    "Rigele Te", "Luke Saville", "Edward Winter", "Elmar Ejupovic", 
    "Elliot Benchetrit", "Ye Cong Mo", "Eero Vasa", "Gianmarco Ferrari",
    "Keisuke Saitoh", "Federico Bondioli", "Mario Gonzalez Fernandez",
    "David Pichler", "Alessandro Giannessi", "Federico Cina", "Fabrizio Andaloro",
    "Siddharth Vishwakarma", "Arthur Weber", "Felix Corwin", "Florian Broska",
    "Alec Beckley", "Constantin Bittoun Kouzmine", "Olaf Pieczkowski",
    "Emilien Demanet", "Sebastian Sorger", "Antoine Cornut Chauvinc", "Max Basing",
    "Vladyslav Orlov", "Federico Gaio", "Steven Diez", "Mikalai Haliak",
    "Adrian Oetzbach", "Antoine Hoang", "Alex Barrena", "Louis Dussin",
    "Bautista Vilicich", "Sebastian Gima", "Máté Valkusz", "Ozan Baris",
    "Aryan Shah", "Peter Heller", "Makoto Ochi", "Dušan Obradović",
    "Mariano Tammaro", "Yaroslav Demin", "Martyn Pawelski", "Buvaysar Gadamauri",
    "Simon Beaupain", "Oliver Tarvet", "Filip Krajinović", "Arthur Reymond",
    "Massimo Giunta", "Juan Manuel La Serna", "Denis Klok", "Mitsuki Wei Kang Leong",
    "Amr Elsayed", "Wishaya Trongcharoenchaikul", "Trevor Svajda", "Lorenzo Bocchi",
    "Diego Dedura Palomero", "Sander Jong", "Tibo Colson", "Maé Malige",
    "Strong Kirchheimer", "Maxence Rivet", "Tsung Hao Huang", "Harry Wendelken",
    "Aziz Ouakaa", "Timo Legout", "Eduardo Ribeiro", "Mateo Barreiros Reyes",
    "Johan Nikles", "Deney Wassermann", "Juan Sebastián Gómez", "Gerald Melzer",
    "Quinn Vandecasteele", "Savva Polukhin", "Antoine Ghibaudo", "Juan Estevez",
    "Diego Fernandez Flores", "Nicolai Budkov Kjaer", "Colin Sinclair",
    "Thanapet Chanta", "Taisei Ichikawa", "Alex Knaff", "Jason Jung",
    "Andrej Nedic", "Samir Banerjee", "Gergely Madarász", "Yuki Mochizuki",
    "Dominik Palan", "Maik Steiner", "Karl Friberg", "Adam Neff", "Kyle Kang",
    "Antoine Bellier", "Aristotelis Thanos", "Franco Ribero", "Branko Djuric",
    "Leonardo Rossi", "Ben Jones", "Iñaki Montes De La Torre", "Nick Chappell",
    "Gian Marco Moroni", "Karlis Ozolins", "Linang Xiao", "Albert Pedrico Kravtsov",
    "Zura Tkemaladze", "Oscar Otte", "Ulises Blanch", "Evgeny Philippov",
    "Francisco Rocha", "Alejandro Manzanera Pertusa", "Ignacio Monzón",
    "Iliyan Radulov", "Tristan McCormick", "Marius Copil", "Devin Badenhorst",
    "Alex Hernandez", "Yun seong Chung", "Peter Buldorini", "Dev Javia",
    "John Sperle", "Salvatore Caruso", "Juan Bautista Otegui", "Samuele Pieri",
    "Nicolas Zanellato", "Erik Arutiunian", "Luca Castagnola", "Kenny de Schepper",
    "Alexandr Binda", "Jack Logé", "Dali Blanch", "Christian Sigsgaard",
    "JiSung Nam", "Thomas Fancutt", "Théo Papamalamis", "Luca Wiedenmann",
    "Wilson Leite", "Niccolo Catini", "John Echeverria", "Samir Hamza Reguig",
    "Olle Wallin", "Duck-hee Lee", "Johan Alexander Rodriguez", "Cem İlkel",
    "Maxwell Mckennon", "Sidane Pontjodikromo", "Ioan Alexandru Chirita",
    "Maxim Zhukov", "Stefan Dostanic", "Rudy Quan", "Miljan Zekić", "Vasek Pospisil",
    "Gabriel Décamps", "Etienne Donnet", "Noah Schachter", "Aleksandr Braynin",
    "Jacob Brumm", "Marlon Vankan", "Giuseppe La Vela", "Trey Hilderbrand",
    "Ewen Lumsden", "Nathan Ponwith", "William Grant", "Maximus Jones",
    "Gavin Young", "Karl Poling", "Mikhail Gorokhov", "Lorenzo Rottoli",
    "Michael Zheng", "Luca Potenza", "Georgii Kravchenko", "Cengiz Aksu",
    "Jakub Filip", "Fabien Salle", "Lautaro Agustin Falabella", "Andrey Chepelev",
    "Louis Tessa", "Sergi Perez Contri", "Khololwam Montsi", "Taha Baadi",
    "Kenta Miyoshi", "Alexander Donski", "Adam Heinonen", "Axel Garcian",
    "Alexandre Aubriot", "Kosuke Ogura", "Timo Stodder", "Tomohiro Masabayashi",
    "Evan Furness", "Vuk Radjenovic", "S D Prajwal Dev", "Alexandre Reco",
    "Dan Martin", "Henry Bernet", "Dhakshineswar Suresh", "Blaž Rola",
    "Adrian Bodmer", "James Story", "Ioannis Xilas", "Alan Fernando Rubio Fierros",
    "Amaury Raynel", "Loann Massard", "Matt Hulme", "Ivan Marrero Curbelo",
    "Pierre Yves Bailly", "Martin Borisiouk", "Guido Andreozzi", 
    "Alvin Nicholas Tudorica", "Gilles Arnaud Bailly", "Bogdan Pavel",
    "Peter Benjamin Privara", "Luca Castelnuovo", "Michael Zhu",
    "Pedro Vives Marcos", "Rei Sakamoto", "Jesse Flores", "Stefan Adrian Andreescu",
    "Yanis Ghazouani Durand", "Kane Bonsach Ganley", "Michele Ribecai",
    "Joshua Sheehy", "Maxence Bertimon", "Leo Vithoontien", "Filippo Romano",
    "Jack Loutit", "Alexander Bernard", "Millen Hurrion", "Tianhui Zhang",
    "Filip Jeff Planinsek", "James Watt", "Pavle Marinkov", "Aliaksandr Liaonenka",
    "Enzo Wallart", "Ezekiel Clark", "Noah Perfetti", "Saveliy Ivanov",
    "Jason Kubler", "Aidan Kim", "Alexander Kotzen", "Kaylan Bigun",
    "Elgin Khoeblal", "Seita Watanabe", "Fausto Tabacco", "Axel Nefve",
    "Kai Wehnelt", "Vlad Andrei Dancu", "Skander Mansouri", "Juan Ignacio Lóndero",
    "Nicolás Kicker", "Mees Rottgering", "Benjamin Thomas George", 
    "Yuta Kawahashi", "Filip Pieczonka", "Matías Franco Descotte", 
    "Joaquin Aguilar Cardozo", "Benjamin Winter Lopez", "Alexander Stater", 
    "Preston Brown", "Carlo Alberto Caniato", "Francesco Ferrari", 
    "Gabriele Maria Noce", "Maxence Beaugé", "Cooper Williams", 
    "Henrik Wiersholm", "David Pérez Sanz", "Alexander Klintcharov", 
    "Petr Brunclik", "Ignacio Parisca Romera", "Ignacio Antonio Becerra Otarola", 
    "Luca Giacomini", "Michael Bassem Sobhy", "Corban Crowther", "Émilien Voisin", 
    "Sora Fukuda", "Victor Lilov", "Yeong Seok Jeong", "Sheng Tang", 
    "Toby Martin", "Adil Kalyanpur", "Sebastian Eriksson", "Stefano D'Agostino", 
    "Paulo Andre Saraiva Dos Santos", "Jasza Szajrych", "Jesse Delaney", 
    "Fares Zakaria", "Grigoriy Lomakin", "Pawit Sornlaksup", "Patrick Brady", 
    "Karim Mohamed Maamoun", "Philip Hjorth", "Adhithya Ganesan", "Sasa Markovic", 
    "Luca Fantini", "Collin Altamirano", "Mihai Razvan Marinescu", "Rafael Jodar", 
    "Kuan Yi Lee", "Patrick Schoen", "Alec Deckers", "Guillaume Dalmasso", 
    "Adit Sinha", "Fermin Tenti", "Amit Vales", "Lorenzo Carboni", "Hayato Matsuoka", 
    "Taiyo Yamanaka", "Dragos Nicolae Cazacu", "Niki Kaliyanda Poonacha", 
    "Siem Woldeab", "Felix Balshaw", "Kaito Uesugi", "Maximilian Homberg", 
    "Maxim Mrva", "Juan Carlos Aguilar", "Cyril Vandermeersch", 
    "Alessandro Bellifemine", "Matthew Summers", "Diogo Marques", "Darwin Blanch", 
    "Tomasz Berkieta", "Illya Beloborodko", "Brian Bozemoj", "Gabriele Bosio", 
    "Matthew William Donald", "Benito Sánchez Martinez", "Alfredo Perez", 
    "Kalin Ivanovski", "Tyler Stice", "Conner Huertas del Pino", "Rubin Statham", 
    "John Hallquist Lithen", "Matyáš Černý", "Niccolo Baroni", "Viktor Jović", 
    "Ryota Tanuma", "Matt Kuhar", "Manish Sureshkumar", "Daniel Antonio Núñez", 
    "Benjamin Pietri", "Daniel Pátý", "Josip Simundza", "Miles Jones", 
    "Oscar Jose Gutierrez", "Petar Jovanovic", "Maciej Rajski", "Giorgio Tabacco", 
    "Pierluigi Basile", "Ryotero Matsumura", "Jea Moon Lee", "Adrien Gobat", 
    "Mert Naci Türker", "Ali Habib", "Artur Kukasian", "Kristjan Tamm", 
    "Patrick Kaukovalta", "Ezequiel Monferrer", "Niccolo Ciavarella", "Hanyi Liu", 
    "Tadeáš Paroulek", "Eric Hadigian", "Călin Manda", "Oliver Ojakaar", 
    "Nikita Mashtakov", "Mert Alkaya", "Nicolas Jadoun", "Iannis Miletich", 
    "Andrew Fenty", "Fernando Cavallo", "Demetris Azoides", "Daisuke Sumizawa", 
    "Pietro Marino", "Seydina Andre", "Jay Dylan Hara Friend", "Quentin Folliot", 
    "Daniel Cox", "Franco Emanuel Egea", "Mariano Dedura Palomero", "Milan Welte", 
    "Mwendwa Mbithi", "Matteo De Vincentis", "Zhenxiong Dong", "Gabriel Donev", 
    "Thijmen Loof", "Tim Ruehl", "Abel Forger", "Arthur Bonnaud", "Jan Kupcic", 
    "Thiago Cigarran", "Sergio Callejon Hernando", "Niklas Schell", "Dylan Dietrich", 
    "Uisung Park", "Guy Orly Iradukunda", "Semen Pankin", "Aristarkh Safonov", 
    "Chan yeong Oh", "Niels Lootsma", "Pengyu Lu", "Yuta Kikuchi", "Aoran Wang", 
    "Isaac Becroft", "Aleksa Pisaric", "Sidharth Rawat", "Christopher Bulus", 
    "Sebastian Prechtel", "Tomas Curras Abasolo", "Mark Whitehouse", "Guy Den Heijer", 
    "Rafael Tosetto", "Sean Hess", "Lasse Poertner", "Daniel Khazime", 
    "Pablo Trochu", "Koki Matsuda", "Charlie Camus", "Mohamed Nazim Makhlouf", 
    "Steve Johnson"
];

// Feedback div
const feedback = document.querySelector('.feedback');

// Populate each cell with an input field and autocomplete functionality
// Function to populate each cell with an input field and autocomplete functionality
document.querySelectorAll('.autocomplete').forEach(cell => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', '');
    input.classList.add('cell');

    const autocompleteList = document.createElement('div');
    autocompleteList.classList.add('autocomplete-list');

    cell.appendChild(input);
    cell.appendChild(autocompleteList);

    // Event listener for input to show suggestions
    input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        autocompleteList.innerHTML = ''; // Clear previous suggestions

        if (query.length >= 2) { // Only show suggestions after 2 letters
            const suggestions = allPlayers.filter(player =>
                player.toLowerCase().includes(query) // Match any part of the name
            );

            // Display filtered suggestions
            suggestions.forEach(player => {
                const option = document.createElement('div');
                option.textContent = player;
                option.classList.add('autocomplete-option');

                // Click event to select the suggestion
                option.addEventListener('click', () => {
                    input.value = player;
                    autocompleteList.innerHTML = ''; // Clear suggestions
                    validateSelection(cell.id, player); // Validate selection
                });

                autocompleteList.appendChild(option);
            });
        }
    });
});


// Function to validate a cell’s selection
function validateSelection(cellId, selectedPlayer) {
    const input = document.querySelector(`#${cellId} input`);
    const correctAnswersForCell = correctAnswers[cellId].map(answer => answer.toLowerCase().trim());
    const playerAnswer = selectedPlayer.toLowerCase().trim();

    if (correctAnswersForCell.includes(playerAnswer)) {
        input.classList.add('correct');
        input.classList.remove('incorrect');
        feedback.textContent = `Cell ${cellId}: Correct! "${selectedPlayer}"`;
    } else {
        input.classList.add('incorrect');
        input.classList.remove('correct');
        feedback.textContent = `Cell ${cellId}: Incorrect. Try again.`;
    }

    // Check if all cells are filled to display the final score
    if (document.querySelectorAll('.cell.correct').length + document.querySelectorAll('.cell.incorrect').length === 9) {
        displayScore();
    }
}

// Display final score
function displayScore() {
    let score = document.querySelectorAll('.cell.correct').length;
    feedback.textContent = `Final Score: ${score} / 9`;
}
