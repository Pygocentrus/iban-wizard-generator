import { countries } from './countries.js';
var letter_map = {A:10, B:11, C:12, D:13, E:14, F:15, G:16, H:17, I:18, J:19, K:20, L:21, M:22, N:23, O:24, P:25, Q:26, R:27, S:28, T:29, U:30, V:31, W:32, X:33, Y:34, Z:35};

var Monaco_sort = ["12739", "10096", "14508", "17569", "30003"]
var Monaco_sort1 = ["00070", "00050", "00040", "00030"]

function randomString({ length, pool }) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += pool[Math.floor(Math.random() * pool.length)];
  }
  return result;
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function num_gen3(span) {
	var num2 = randomString({length: span, pool: '123456789'});
	return num2;
}

function estoniaCheckDigit(account_number) {
	let eArray = [7, 3, 1];
	let eLen = account_number.length;
	let st = account_number.length;
	let tot = 0;
	while(eLen > 0 && account_number.substr(--eLen, 1) >= 0) {
		tot += account_number.substr((st - 1) - eLen, 1) * eArray[(eLen % 3)];
	}
	let cNum = ((Math.ceil((tot/10))*10) - tot);
	return cNum;
}

function char_gen(span) {
	var char2 = randomString({length: span, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'})
	return char2;
}

String.prototype.bankAccountKey=function() {
	var str = this.toString(),deb,rst;
	while (deb=str.substr(0,12),str=str.substr(12)) {str=(deb%97).toString()+str;}
	rst=98-deb%97;
	return rst<10?'0'+rst:''+rst;
}

function randomElelment(array) {
	return array[Math.floor(Math.random() * array.length)]
}

function randomChar(n) {
	var characterArray = 'QWERTYUIOPLKJHGFDSAZXCVBNM'.split('')
	var	result = '';
	for (var i = 0; i < n; i++){
		result += randomElelment(characterArray)
	}
	return result;
}

var d=[
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], 
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], 
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], 
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], 
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], 
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], 
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], 
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], 
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
];

// permutation table p
var p=[
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], 
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], 
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], 
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], 
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], 
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], 
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
];

function replaceChars(conv_string) {
	for(let i = 0; i < conv_string.length; i++) {
		var conv_char = conv_string[i];
		if(conv_char in letter_map) {
			var IBAN_conv = letter_map[conv_char];
			conv_string = conv_string.replace(conv_char, IBAN_conv.toString());
		}
	}
	return conv_string;
}

var conv_array = {A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9, J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9, S:2, T:3, U:4, V:5, W:6, X:7, Y:8, Z:9}
function replaceChars2(input) {
	for(let i = 0; i < input.length; i++) {
		var conv_char = input[i];
		if(conv_char in conv_array) {
			var j = conv_array[conv_char];
			input = input.replace(conv_char, j.toString());
		}
	}
	return input;
}

function calcChecksum(countryCode, randomPart) {
	var checkString = randomPart + countryCode + "00";
	checkString = replaceChars(checkString);
	var checksum = checkString.bankAccountKey();
	var checkCheck = randomPart + countryCode + checksum;
	checkCheck = replaceChars(checkCheck);
	return countryCode + checksum.toString() + randomPart;
}

function ribCheck(input, inp, iny) {
	var rib_cand2 = replaceChars2(iny);
	var t = 97 - ((89 * input + 15 * inp + 3 * rib_cand2) % 97);
	return t

}

var table = [
  [0, 3, 1, 7, 5, 9, 8, 6, 4, 2],
  [7, 0, 9, 2, 1, 5, 4, 8, 6, 3],
  [4, 2, 0, 6, 8, 7, 1, 3, 5, 9],
  [1, 7, 5, 0, 9, 8, 3, 4, 2, 6],
  [6, 1, 2, 3, 0, 4, 5, 9, 7, 8],
  [3, 6, 7, 4, 2, 0, 9, 5, 8, 1],
  [5, 8, 6, 9, 7, 2, 0, 1, 3, 4],
  [8, 9, 4, 5, 3, 6, 2, 0, 1, 7],
  [9, 4, 3, 8, 6, 1, 7, 2, 0, 5],
  [2, 5, 8, 1, 4, 3, 6, 7, 9, 0]
];

// Bosnia and others?
function mod97_10(input) {
	var a1 = 1;
	var ch = input.charCodeAt(0) - 48;
	var check = ch;
	for(var i = (input.length - 2); i >= 0; i--) {
		ch = input.charCodeAt(i) - 48;
		a1 = (a1 * 10) % 97;
		check += (a1 * (Number(ch)));
	}
	var x = (98 - (check % 97));
	if(x < 10){
		x = "0" + x;
	}
	return x;
}

function mod11(input) {
	var cifras = [1,2,4,8,5,10,9,7,3,6];
	var cheqeo = 0;
	for(var i = 0; i < 10; i++) {
		cheqeo += Number(input[i]) * Number(cifras[i]);
	}
	cheqeo = 11 - (cheqeo % 11);
	if(cheqeo == 11) cheqeo = 0;
	if(cheqeo == 10) cheqeo = 1;
	return cheqeo;
}

function norwayCheck(input) {
	var fact = [5,4,3,2,7,6,5,4,3,2]
	var tot = 0;
	var account_num = input;
	for(var i = 0; i < 10; i++) {
		tot += account_num[i] * fact[i];
	}
	var rem = tot % 11;
	if(((11 - rem) % 11) == 10){
	}
	return (11 - rem) % 11;
}

function spanishCheck() {
    var Spanish_sort = ["2100", "2095", "0081", "2080", "0182", "0487", "0075", "3190", "2038", "1465", "3004", "0128"]
	var bnb = sample(Spanish_sort) + num_gen3(4);
	var bnb2 = "00" + bnb;
	var account_num = num_gen3(10);
	var first_digit = mod11(bnb2);
	var second_digit = mod11(account_num);
	var spainCheck = bnb2.substr(2,8) + first_digit + second_digit + account_num;
	return spainCheck;
}

function generateIBAN(ISO) {
  const country = countries.find(country => country.code === ISO)
//   var IBAN_length = countries[ISO].length;
  var IBAN_length = country.length;
//   var middle_characters = countries[ISO].character;
  var middle_characters = country.character;

  switch(ISO) {

  case "NL":
    	var NL_Banks = ["ABNA", "RABO", "INGB"];
        var NL_Accounts = ['3767744449', '8849764685', '1679475908', '7568468658', '7356737620', '6465126079', '4353368141', '3115404417', '5198491756', '8877477636', '6787979517', '3014449407', '2749559820', '5985611140', '5138773127', '9471241308', '1878166956', '7108893045', '3729480081', '8201469062', '6333227641', '9238197806', '3659950165', '4458972219', '9549565319', '9317387888', '7910683588', '9747720019', '1927261899', '5299017782', '6201251618', '1628106735', '7853818114', '7527846909', '8674905641', '2122787074', '4886189474', '5136679077', '5361018961', '5632579034', '1199399817', '6496646791', '4388522244', '8135680120', '3070632572', '7942781380', '5350244469', '9538003810', '1992204624', '6732807986', '6708407906', '8141336991', '8729230152', '7440639480', '7637078981', '3146454459', '9688157082', '1143468236', '9481673421', '2137951150', '7774382046', '8234998285', '2952671982', '2863705849', '7507044742', '5373380466', '4461927814', '8727958558', '4737123439', '7998733292', '6583086565', '5994508810', '2779975601', '6212151431', '8806646958', '3840188059', '8589312569', '4613148448', '1158470533', '4642749241', '5811534469', '1869773616', '3304481311', '1196720460', '7608092459', '9079565997', '7819947683', '9402374159', '9955442484', '4781094090', '2288983183', '1670475085', '4948749915', '8999665062', '2295108179', '3526558027', '2978307978', '1822913977', '1773373838', '7236495824', '7794745128', '5883930565', '4717095111', '2420745027', '9918641924', '3730976796', '1284418839', '8441374295', '1344002129', '5920574038', '7984823820', '9223011655', '7577249270', '8548609842', '8794631506', '7030136047', '5582689532', '7650143244', '1188945513', '1383283540', '4242739303', '4448094871', '5804762982', '9193322984', '9971485915', '9915029543', '8966820263', '1289364745', '9091319364', '9859479577', '6908644960', '4861845297', '5124594993', '7906916670', '2900154197', '8683750361', '2262412073', '9326322815', '9450889198', '1401694179', '7925653426', '1022564560', '4982444048', '6863597098', '6496515182', '4133227913', '4789170233', '8998630931', '2760150151', '8009649546', '9942408754', '1920945032', '3659362247', '8765521307', '9966705163', '9351425231', '3518588532', '6579776978', '7773107033', '6995898621', '1655314556', '4362244417', '5660751954', '7569006453', '3215513765', '8675663943', '4987790602', '9691303264', '8386803843', '4731839270', '6143727961', '3675462129', '1246830221', '1584058048', '3031628489', '9695852815', '4520711568', '8044953574', '8831135759', '2197275291', '2579756728', '1369777396', '6649020443', '7393964341', '1440310556', '4545747078', '3717231707', '9248708374', '4760808973', '2766662669', '5982482471', '9434777216', '6121940131', '9737375777', '9795311433', '4707090842', '6055981262', '4879074012', '4734775338', '3945944457', '8902022560', '4259614754', '3420637519', '3731707721', '5940297536', '3025195118', '5595284773', '3064161482', '9631641651', '7939901389', '1857087526', '8635612388', '4880983179', '9657789273', '6669002742', '7134534839', '4197809344', '9932384941', '6291533782', '1938035321', '5963374561', '5690068063', '6022027691', '8193596846', '6775613067', '7183598144', '3154172025', '8265634552', '4099462951', '8731326943', '4427658911', '1979747032', '3550580576', '7977369877', '9961700368', '5985398153', '4666097791', '3690200148', '2683542178', '9904789940', '8139718173', '7389535490', '2775680828', '1103924680', '2221802675', '7852130259', '8978126928', '7200045691', '1302357468', '5074254043', '9258801903', '5588331737', '9574218201', '6684004963', '5028084874', '7467539436', '3039087649', '3141751439', '7723597010', '5558304928', '4416709382', '3564679081', '9942576223', '4759261354', '1578530261', '5963941776', '3175229417', '2764204256', '1484687876', '6506110988', '5253446745', '6044978370', '9082037890', '6277351028', '1383182396', '2859779760', '5427658955', '8230962103', '2718081430', '9732254661', '6289099205', '8805798800', '5560006823', '8450854113', '2268352412', '9053318992', '1390722899', '5477021047', '6435690758', '1782020381', '5157915454', '8694866803', '5766671156', '9985747011', '6152842603', '7209131833', '9287436010', '3330533676', '3261447176', '9130582334', '5162284696', '1041035373', '7873292649', '5316132912', '9763136946', '7023532722', '7948612920', '7672627392', '7711638558', '7673657082', '1319778291', '4643636556', '4378030446', '7434587830', '6864399966', '5179205913', '6482008283', '6401993928', '2720070572', '9691012820', '5361965189', '1438227787', '1574343181', '5239941823', '7181308424', '8681965719', '9809158653', '5965981937', '5082680188', '1978967489', '6709624056', '6563237436', '5030598332', '7705935139', '2858727643', '2596749386', '7103072574', '8181091612', '2555569839', '3905191822', '3039673343', '2274264198', '3382647974', '6359906732', '4937453297', '1944881964', '5794845619', '9535416235', '1115137468', '2412255601', '1466591145', '9701210220', '6143911908', '2315122457', '7537184356', '7523644651', '9965356246', '9406362538', '2922497305', '3496035218', '9373475770', '1957558601', '3104179859', '9043081477', '6653222179', '7909457464', '8910219718', '5408281337', '1011562413', '1415694826', '3121637177', '5195444706', '4892894109', '7619995846', '6839136159', '1899261257', '5068243019', '1008270121', '4418364501', '9996666778', '4780353297', '3605998615', '9501054837', '3627647424', '2283681073', '4492703411', '6686956546', '2753394563', '1969256915', '8355863143', '3777087823', '9548056305', '1606301918', '8380001095', '3696794244', '4115845937', '6282495962', '8720446314', '8013095843', '1782371249', '2605052419', '6224410976', '3779588560', '5206019070', '5716186998', '9627994502', '6631699223', '5994666033', '1139900560', '4040435087', '2677424363', '3195199319', '6864436837', '4309398243', '4683542374', '7229237580', '3717497545', '3135536696', '5679818272', '7007935591', '8487376045', '4665815860', '7959494258', '4746672490', '5172064443', '6221094275', '2327776783', '2908385309', '7806242643', '7659536168', '9521740876', '6434209169', '1906104131', '2045352188', '5242052503', '6291988119', '2364390338', '9925441714', '1971879746', '4863744099', '2370432586', '1320949010', '4734538751', '8261521222', '6879970117', '2469735076', '1588633721', '3182993631', '1621561526', '4621372092', '7451446883', '5406439960', '3451011026', '1380321867', '2293362523', '6911098343', '8672131290', '8247360527', '9313499797', '9565235778', '5311809574', '5999794323', '8817453765', '3351659555', '8338800724', '1091926204', '6038321969', '1403412472', '4758761590', '2318696306', '1521764247', '1663368082', '6111062476', '9455762838', '2371458805', '5262865534', '7651503031', '7649618366', '8933785434', '9392055374', '6285885613', '8253182457', '5614740864', '3221098502', '9323024236', '5486451466', '1105049337', '1388268736', '2503801668', '9403840137', '7830770891', '4907152752', '5888158534', '4824538831', '9897151745', '9634007716', '1068885432', '4696222926', '1321530935', '8995592788', '5394792070', '5406040774', '1579872026', '5558975318', '4312325952', '1157530303', '8845464385', '9392362188', '2847123288', '7843842861', '3670561447', '8592794269', '7909262728', '9038954298', '4999152932', '6922895703', '9003576416', '5749342085', '8972164151', '2238591354', '9222247655', '1599147955', '5697455291', '8871007662', '3643842074', '1021790842', '6664435071', '9596756389', '6143537119', '4097012428', '9372718300', '8035492543', '7489795591', '1876219181', '1584159804', '9073237009', '9007769359', '5750047296', '4745657714', '6637543128', '5319829221', '6737738109', '7621853905', '1911430777', '5183503354', '6266038226', '3984212798', '6665420221', '6519574414', '5111110259', '6548268733', '3667086008', '1729344860', '2650400811', '6371362585', '1749777983', '9442141368', '1272753638', '9338068110', '4489213824', '2366058993', '4240666252', '1047027607', '8205778493', '1436292697', '1163935948', '9384655988', '3991828197', '1417101881', '7363245428', '1782461868', '4395098177', '6233671132', '2486932380', '1311816593', '4915107582', '9999810888', '9730769656', '2682297498', '8855988913', '6487526967', '9732194030', '6319269278', '6755037397', '7527421754', '1522775986', '4824507324', '1122832273', '8694892022', '5330621534', '2011060885', '5245129183', '2792511621', '9893570476', '4980803245', '3741207772', '3309755649', '5732787127', '8502137913', '2067756052', '1568852959', '1587926199', '2187209016', '7619798757', '9592309493', '7748196702', '3367466468', '6733307944', '5831335380', '8219153121', '7082086296', '2228161411', '8284009536', '2405012723', '8706604226', '8708618194', '7349101430', '9012918502', '1028200056', '5753546897', '9996436217', '3506581023', '1363280856', '5792707111', '8439421117', '8480934492', '4228435912', '7004792366', '2892233402', '9374573679', '5597655787', '4923460458', '5132123597', '3882854936', '7177596941', '7070755813', '2262368678', '1142626903', '9227934553', '7828772912', '5861098352', '6771015777', '1200042867', '9589603858', '2376059879', '4634999471', '5547096946', '6064103256', '2532528516', '3783029058', '4281366911', '2141848644', '4658124920', '3755753065', '7368442647', '3184752488', '9099952775', '7792285766', '1558385967', '4217631642', '2524542076', '4358076548', '8977747317', '8229094322', '4212215411', '2057693643', '6201350640', '8645690365', '7140921482', '9661117578', '4141305669', '8361280820', '9861487085', '2095310012', '9639906824', '4783095582', '3912975930', '4186520410', '7509555507', '3100072456', '1901066592', '6502761380', '6662477214', '8473522664', '7138432496', '6223319916', '7482085033', '9049426654', '6511444724', '5653002348', '2379601127', '4047633976', '9054943327', '7052105551', '4398662022', '4521202713', '1104108267', '2560035731', '8852285024', '8946051078', '5641531316', '2266765221', '8738440008', '9822994664', '9260543673', '2467448487', '5393795351', '7829756201', '9694475635', '5257015404', '7851379504', '4193835510', '2663151874', '6495564279', '6512284550', '6070066847', '2122013192', '6187602722', '9679277003', '8835593166', '1154012735', '3909255345', '4991062764', '5004293872', '1965265332', '2128949858', '9434891019', '9071327418', '4435376989', '9096356438', '2136665782', '4083166800', '7704157876', '5175671529', '5356033141', '4461857859', '5749363309', '9224568173', '1958634190', '6270867398', '5528005485', '4966693802', '8973442368', '1430833394', '8803926372', '4407512164', '9558721522', '3137597226', '5027245882', '8758116443', '5924436675', '7639905176', '2423554788', '5993159871', '1412466180', '2575875390', '8424542584', '5525255073', '6798610471', '9695369502', '9397935380', '1375288695', '7743642356', '9127357228', '6986568002', '4887467303', '8611765885', '4705270495', '4031638493', '8424598490', '2603402463', '1692465635', '9678815451', '9415692391', '5251802137', '3942469782', '5252891109', '9618724476', '4110487447', '8571189358', '1424738261', '1397996838', '6797516501', '3130742751', '4315531456', '1540572579', '9131044735', '7114507283', '2202690484', '1049096673', '9846631219', '2863434403', '8434248247', '5435973945', '7044037380', '4909169245', '4526312517', '7798392807', '5273748739', '8479662646', '7189610219', '5405811602', '3998396233', '5079779284', '3749975701', '7134384551', '7498112493', '1495696898', '6316250355', '3838697359', '6470684289', '7232510543', '8933084452', '1171403585', '5051042988', '2298608059', '6383931601', '4826953240', '6034837898', '4428219474', '4597485589', '5301200062', '7951708135', '7668256466', '8533425791', '4972429011', '2786219639', '5612457383', '4054767621', '3665292913', '7020127142', '3470416656', '3528973196', '3838911296', '1070230618', '9647829353', '2504374283', '9788055427', '3595227557', '7256973586', '9167759785', '6500713311', '3466893453', '4787393871', '2490067532', '7905595609', '6971032004', '9739243436', '8971328290', '7080876885', '4405427607', '7691116985', '9500162865', '5602795901', '8743112544', '2454554658', '4386698256', '9712139840', '5647918042', '5476393838', '5082783165', '4370891833', '5406045164', '4993655010', '5890469479', '3045819168', '3591831883', '5319825374', '8027105943', '4562575255', '8252058302', '4871952010', '4475689805', '6296399693', '7035378898', '5808504708', '4963487330', '8014558928', '5240110409', '3643132999', '7085742275', '9824364420', '4952870715', '2338418883', '2899665057', '9502485475', '2856807216', '9763261902', '3206498058', '8835804299', '8818556967', '5055036109', '7054786548', '6684756000', '7123425928', '1208552090', '3831267707', '8418459174', '5252845719', '7584741207', '8233380377', '2121590226', '2938714947', '2859176594', '7652418755', '4649075238', '2825057568', '4636681924', '3349491480', '4415260276', '3365135561', '7071437513', '8057339330', '4026824314', '9837080566', '3851686748', '5070069357', '5353131762', '6784444442', '7024910534', '9980411821', '8011260901', '7116259503', '1954254121', '6008851617', '7600386364', '6799312636', '3034565194', '7341323558', '8584700412', '1458509540', '3966322153', '7520051579', '3221888112', '3187377025', '1968794778', '1914956885', '6360804956', '6918258974', '9202898340', '2773309480', '9242086444', '8985562061', '8858909097', '1735658812', '4293946624', '7243913512', '2424672245', '9906008334', '9464169427', '5598380021', '2098811624', '8214484995', '6373487717', '1964258413', '1768606978', '2755167904', '4220533664', '4452759149', '7762494464', '8430666915', '5515439724', '5994978469', '5040995164', '6099101268', '8617225181', '4985889105', '7732009851', '8432908576', '6770096250', '4304221396', '4438120233', '8681036211', '9082148838', '5946717057', '9510165298', '7889423187', '8085990849', '8494892657', '8816676248', '9304669103', '3403751775', '8238027543', '9154010896', '5228863516', '8316601095', '9108061688', '7827071589', '8399675482', '1756700125', '6854679206', '7864733042', '4883846911', '3971204384', '2640990624', '7808579459', '4605215840', '7976489410', '4956451237']
    	var NL_BIC = sample(NL_Banks)
		var NL_numeric_part = sample(NL_Accounts)
		var NL_cand = NL_BIC + NL_numeric_part + "";
		var NL_IBAN = calcChecksum(ISO, NL_cand);
		return NL_IBAN;

  case "GB":
        var UK_Banks = ["BARC", "LOYD"]
        var BARCLAYS_sort = ["200318", "200326", "200353", "200378", "200380", "200384", "200395", "200401", "200404"]
        var Lloyds_sort = ["876934", "874304", "874302", "874301", "779551", "779535", "779516", "779515", "779519", "779518", "779514", "779513", "779520", "779521", "779512", "779511", "779510", "779509", "779508", "779507", "779506", "779505", "779504", "779503", "779502", "779331", "779314", "779311", "779309", "779307", "779305", "779304", "779302", "779301", "779300", "779181", "779180", "779171", "779169", "779168", "779166", "779165", "779164", "779163", "779161", "779149", "779148", "779147", "779146", "779145", "779144", "779143", "779142", "779141", "779140", "779127", "779139", "779138", "779136", "779134", "779133", "779132", "779131", "779130", "779129", "779128", "779126", "779124"]
 		var UK_BIC = sample(UK_Banks);
		var UK_numeric_suffix = IBAN_length - 4 - middle_characters;
		var UK_numeric_part = "" + sample(UK_BIC === 'BARC' ? BARCLAYS_sort : Lloyds_sort) + num_gen3(UK_numeric_suffix - 6);
		var UK_cand = UK_BIC + UK_numeric_part + "";
		var UK_IBAN = calcChecksum(ISO, UK_cand);
		return UK_IBAN;

  case "BR":
		var BR_numeric_suffix = IBAN_length - 6;
		var BR_randomPart = num_gen3(BR_numeric_suffix);
		BR_randomPart += randomChar(1);
		BR_randomPart += num_gen3(1);
		var BR_IBAN = calcChecksum(ISO, BR_randomPart);
		return BR_IBAN;

  case "SC":
		var SY_numeric_suffix = IBAN_length - 7;
		var SY_randomPart = num_gen3(SY_numeric_suffix);
		SY_randomPart += randomChar(3);
		var SY_IBAN = calcChecksum(ISO, SY_randomPart);
		return SY_IBAN;

  case "CH":
		var CH_numeric_suffix = IBAN_length - 9;
		var CH_really = "" + "89144" + num_gen3(CH_numeric_suffix);
		var CH_IBAN = calcChecksum(ISO, CH_really);
		return CH_IBAN;

  case "MU":
		var MA_BIC = char_gen(middle_characters);
		var MA_numeric_suffix = IBAN_length - 11;
		var MA_randomPart = num_gen3(MA_numeric_suffix);
		MA_randomPart += randomChar(3);
		var MA_cand = MA_BIC + MA_randomPart + "";
		var MA_IBAN = calcChecksum(ISO, MA_cand);
		return MA_IBAN;

  case "AL":
        var Albania_sort = ["61456613", "13411321", "21451126", "87938313"]
		var ALB_numeric_suffix = IBAN_length - 12;
		var ALB_numeric_part = "" + sample(Albania_sort) + num_gen3(ALB_numeric_suffix);
		var ALB_IBAN = calcChecksum(ISO, ALB_numeric_part);
		return ALB_IBAN;

  case "BE":
        var Belgium_sort_code = ["199", "173", "798", "587", "988", "817", "978", "548", "897", "557", "631", "519", "953", "663", "456", "233", "954", "812", "999", "561", "549", "957", "485", "321", "436", "429", "131", "735", "878"]
		var BM_numeric_part = "" + sample(Belgium_sort_code) + num_gen3(IBAN_length - 9);
		var how = (Number(BM_numeric_part) % 97 + "");
		if(how < 10){
			how = "0" + how;
		}
		var BM_randomPart = BM_numeric_part + how;
		var BM_IBAN = calcChecksum(ISO, BM_randomPart);
		return BM_IBAN;

  case "BA": 
		var BS_numeric_part = "102" + num_gen3(IBAN_length - 7);
		var BS_randomPart = BS_numeric_part;
		var BS_IBAN = calcChecksum(ISO, BS_randomPart);
		return BS_IBAN;

  case "EE":
		var ES_numeric_part = num_gen3(IBAN_length - 7);
		var ES_randomPart = "12" + ES_numeric_part + estoniaCheckDigit(ES_numeric_part);
		var ES_IBAN = calcChecksum(ISO, ES_randomPart);
		return ES_IBAN;

  case "CZ":
		var CZ_numeric_part = "5051" + num_gen3(IBAN_length - 8); // 0100
		var CZ_randomPart = CZ_numeric_part;
		var CZ_IBAN = calcChecksum(ISO, CZ_randomPart);
		return CZ_IBAN;

  case "GR":
        var Greek_sort = ["010", "011", "014", "017"]
		var GR_numeric_part = sample(Greek_sort) + num_gen3(IBAN_length - 7);
		var interIBAN = calcChecksum(ISO, GR_numeric_part);
		return interIBAN;

  case "DE":
		var DE_randomPart = "50010517" + num_gen3(IBAN_length - 12);
		var DE_IBAN = calcChecksum(ISO, DE_randomPart);
		return DE_IBAN;
  
  case "DK":
		var DK_randomPart = "5051" + num_gen3(IBAN_length - 8);
		var DK_IBAN = calcChecksum(ISO, DK_randomPart);
		return DK_IBAN;

  case "IT":
		var numeric_part = "0300203280" + num_gen3(IBAN_length - 15);
		var Italy_map = {0:"1", 1:"0", 2:"5", 3:"7", 4:"9", 5:"13", 6:"15", 7:"17", 8:"19", 9:"21"}
		var Italy_CIN = {0:"A", 1:"B", 2:"C", 3:"D", 4:"E", 5:"F", 6:"G", 7:"H", 8:"I", 9:"J", 10:"K", 11:"L", 12:"M", 13:"N", 14:"O", 15:"P", 16:"Q", 17:"R", 18:"S", 19:"T", 20:"U", 21:"V", 22:"W", 23:"X", 24:"Y", 25:"Z"}
		var yy = 0;
		var xx = 0;
		for(var i = 1; i < 22; i += 2) {
			yy +=  Number(numeric_part.charAt(i));

		}
		for(var j = 0; j < 22; j += 2) {
			let jj = Number(numeric_part.charAt(j));
			let ii = Italy_map[jj];
			xx += Number(ii);
		}
		let uu = xx + yy;
		let ll = uu % 26;
		let kk = Italy_CIN[ll];
		var randomPart = kk + numeric_part;
		var interIBAN = calcChecksum(ISO, randomPart);
		return interIBAN;

  case "LU":
		var LX_numeric_part = "010" + num_gen3(IBAN_length - 7);
		var LX_IBAN = calcChecksum(ISO, LX_numeric_part);
		return LX_IBAN;

  case "LI":
		var LC_numeric_part = "08800" + num_gen3(IBAN_length - 9);
		var LC_IBAN = calcChecksum(ISO, LC_numeric_part);
		return LC_IBAN;

  case "IE":
		var IR_numeric_part =  num_gen3(IBAN_length - 16);
		var IR_randomPart = "BOFI900017" + IR_numeric_part;
		var IR_IBAN = calcChecksum(ISO, IR_randomPart);
		return IR_IBAN;

  case "PL":
		var PL_numeric_part = "10902402" + num_gen3(IBAN_length - 12);
		var PL_IBAN = calcChecksum(ISO, PL_numeric_part);
		return PL_IBAN;

  case "AT":
        var Austria_sort = ["14000", "19360", "19470", "11000", "54000", "12000", "20604", "32000", "60000", "54000", "20404", "36218", "32195", "66163", "34000", "20111", "22500"]
		var AU_numeric_part = sample(Austria_sort) + num_gen3(IBAN_length - 9);
		var AU_IBAN = calcChecksum(ISO, AU_numeric_part);
		return AU_IBAN;
  
  case "HR":
        var Croatia_sort = ["2340009", "2500009", "2402006", "2360000", "2484008"]
		var CRT_numeric_part = sample(Croatia_sort) + num_gen3(IBAN_length - 11);
		var CRT_IBAN = calcChecksum(ISO, CRT_numeric_part);
		return CRT_IBAN;

  case "XK":
		var KV_numeric_part = "11" + num_gen3(IBAN_length - 6);
		var KV_IBAN = calcChecksum(ISO, KV_numeric_part);
		return KV_IBAN;

  case "SM":
		var SM_numeric_part = "0322509800" + num_gen3(IBAN_length - 14);
		var interIBAN = calcChecksum(ISO, SM_numeric_part);
		return interIBAN;
  
  case "HU": 
        var Hungray_sort = ["10700024", "13100007", "10918001"]
		var HG_numeric_part = sample(Hungray_sort) + num_gen3(IBAN_length - 12);
		var HG_IBAN = calcChecksum(ISO, HG_numeric_part);
		return HG_IBAN; 

  case "AE":
        var UAE_sort = ["021", "003", "033", "035", "026"]
		var UA_numeric_part = sample(UAE_sort) + num_gen3(IBAN_length - 7);
		var UA_IBAN = calcChecksum(ISO, UA_numeric_part);
		return UA_IBAN; 

  case "BG":
        var Bulgaria_sort = ["STSA9300", "UNCR7000", "RZBB9155", "TTBB9400", "BNPA9440", "IORT8094"]
		var BG_numeric_part = sample(Bulgaria_sort) + num_gen3(IBAN_length - 12);
		var BG_IBAN = calcChecksum(ISO, BG_numeric_part);
		return BG_IBAN; 

  case "SP":
		var SP_randomPart = spanishCheck();
		var SP_IBAN = calcChecksum(ISO, SP_randomPart);
		return SP_IBAN; 

  case "TR":
		var TR_numeric_part = "00062" + num_gen3(IBAN_length - 9);
		var TR_IBAN = calcChecksum(ISO, TR_numeric_part);
		return TR_IBAN;

  case "NO":
		var NR_numeric_part = num_gen3(IBAN_length - 5);
		var chek = norwayCheck(NR_numeric_part);
		while(chek == 10) {
			NR_numeric_part = num_gen3(IBAN_length - 5);
			chek = norwayCheck(NR_numeric_part);
		}
		var NR_randomPart = NR_numeric_part + chek;
		var NR_IBAN = calcChecksum(ISO, NR_randomPart);
		return NR_IBAN;

  case "MC":
		var MN_numeric_part = Number(sample(Monaco_sort)); 
		var y =  sample(Monaco_sort1)
		var z = num_gen3(10) + randomChar(1);
		var x = ribCheck(MN_numeric_part, y, z);
		if(x < 10) {
			x = "0" + x;
		}
		var MN_randomPart = MN_numeric_part + y + z + x;
		var MN_IBAN = calcChecksum(ISO, MN_randomPart);
		return MN_IBAN;

  case "FR":
		var FR_numeric_part = Number(sample(Monaco_sort)); 
		var y =  sample(Monaco_sort1)
		var z = num_gen3(10) + randomChar(1);
		var x = ribCheck(FR_numeric_part, y, z);
		if(x < 10) {
			x = "0" + x;
		}
		var FR_randomPart = FR_numeric_part + y + z + x;
		var FR_IBAN = calcChecksum(ISO, FR_randomPart);
		return FR_IBAN;

  case "RO":
        var Romania_sort = ["PORL", "RZBR"]
		var RM_numeric_part = num_gen3(IBAN_length - 8);
		var RM_randomPart = sample(Romania_sort) + RM_numeric_part; 
		var RM_IBAN = calcChecksum(ISO, RM_randomPart);
		return RM_IBAN;

  case "CR":
		var CR_numeric_part = num_gen3(IBAN_length - 5)
		var nb = "0" + CR_numeric_part;
		var CR_IBAN = calcChecksum(ISO, nb);
		return CR_IBAN;

  case "PT":
        var Portugal_sort = ["00350651"]
		var PT_numeric_part = sample(Portugal_sort) + num_gen3(IBAN_length - 14);
		var PT_randomPart =  PT_numeric_part + mod97_10(PT_numeric_part);
		var PT_IBAN = calcChecksum(ISO, PT_randomPart);
		return PT_IBAN;

  default:
    //   var IBAN_length = countries[ISO].length;
    var IBAN_length = country.length;
    //   var middle_characters = countries[ISO].character;
    var middle_characters = country.character;
	var numeric_suffix = Number(IBAN_length - 4 - middle_characters);
	var numeric_part = num_gen3(numeric_suffix);
	var BIC = char_gen(middle_characters);
	var randomPart = BIC + numeric_part + "";
	var interIBAN = calcChecksum(ISO, randomPart);
	return interIBAN;
  }
}

export interface Country {
  code: string;
  name: string;
  ibanLength: number;
  bankCodeLength: number;
  accountNumberLength: number;
  example: string;
}

export { generateIBAN };
