var dataList = [
    { time: '01:13.8', make: 'Pagani', model: 'Huayra', track: '', season:'19', episode: '01'},
    { time: '01:14.3', make: 'BAC', model: 'Mono', track: '',season: '20', episode: '02'},
    { time: '01:15.1', make: 'Ariel', model: 'Atom V8 500', track: 'moist',season: '16', episode: '01'},
    { time:'01:16.2', make:'McLaren', model:'MP4-12C', track: '', season: '17', episode: '03'},
    { time:'01:16.5',make: 'Lamborghini', model: 'Aventador LP700-4', track: '',season: '17', episode: '04'},
    { time:'01:16.8', make: 'Bugatti', model: 'Veyron Super Sport', track: '', season: '15', episode: '05'},
    { time: '01:17.1', make:'Gumpert', model:'Apollo S', track: '',season: '11',  episode: '06'},
    { time: '01:17.3', make: 'Ascari', model: 'A10', track: '',season: '10', episode: '09'},
{ time: '01:17.6', make: 'Koenigsegg', model: 'CCX (with Top Gear Wing)', season: '08', episode: '04'},
{ time:01:17.7	Noble M600 (cold)	14.05},
{ time:01:17.8	Nissan GT-R (2012)	17.04},
{ time:01:17.8	Pagani Zonda Roadster F (Clubsport Version)	12.04},
{ time:01:17.9	Caterham Seven Superlight R500 (cold)	12.06},
{ time:01:18.3	Bugatti Veyron 16.4	12.04},
{ time:01:18.4	Pagani Zonda F	07.04},
{ time:01:18.9	Maserati MC12	06.02},
{ time:01:19.0	Lamborghini Murciélago LP670-4 SuperVeloce	13.02},
{ time:01:19.0	Mercedes-Benz SLS AMG Black Series	20.04},
{ time:01:19.0	Enzo Ferrari	05.02},
{ time:01:19.1	Ferrari 458 Italia	15.06},
{ time:01:19.5	Lamborghini Gallardo LP560-4	12.01},
{ time:01:19.5	Porsche 997 GT2	12.01},
{ time:01:19.5	Ariel Atom 2 300	05.09},
{ time:01:19.6	Mercedes-Benz SLS AMG Roadster	18.02},
{ time:01:19.7	Nissan GT-R	11.05},
{ time:01:19.7	Ferrari 430 Scuderia	11.01},
{ time:01:19.8	Ferrari 599 GTO	16.02},
{ time:01:19.8	Lamborghini Murciélago LP640	09.05},
{ time:01:19.8	Porsche Carrera GT	04.04},
{ time:01:20.4	Chevrolet Corvette C6 ZR1 (damp)	14.02},
{ time:01:20.4	Koenigsegg CCX (without Top Gear Wing)[2]	08.01},
{ time:01:20.7	Ascari KZ1 (damp)	07.01},
{ time:01:20.9	Mercedes-Benz SLR McLaren	04.02},
{ time:01:21.0	Mercedes-Benz C63 AMG Black Series	18.05},
{ time:01:21.2	Ferrari 599 GTB Fiorano	10.03},
{ time:01:21.6	Audi R8 V10 (damp)	14.02},
{ time:01:21.7	Mercedes-Benz SLS AMG Electric Drive	20.04},
{ time:01:21.9	Ford GT	04.08},
{ time:01:22.2	Porsche 911 Turbo Convertible	15.04},
{ time:01:22.3	Audi R8 V10 Spyder	15.04},
{ time:01:22.3	Ferrari 360 Challenge Stradale	04.03},
{ time:01:22.3	Porsche 911 GT3 RS (996 mk.II)	04.03},
{ time:01:22.4	Chevrolet Corvette C6 Z06	08.02},
{ time:01:22.5	Noble M15	08.08},
{ time:01:22.8	Lexus LFA (wet)[3]	14.07},
{ time:01:22.9	Ferrari F430 F1	06.08},
{ time:01:22.9	Porsche 911 Sport Classic	15.02},
{ time:01:23.0	Mercedes-Benz SL65 AMG Black Series	13.03},
{ time:01:23.1	KTM X-Bow (Not Shown on TV)[4] (Driven by first white Stig)},
{ time:01:23.1	Maserati Gran Turismo MC Stradale	18.05},
{ time:01:23.1	Porsche 997 GT3},
{ time:01:23.2	Ferrari F430 Spider F1	07.03},
{ time:01:23.3	Jaguar XKR-S	17.04},
{ time:01:23.7	Lamborghini Murciélago (retested)},
{ time:01:23.8	Pagani Zonda C12 S 7.3 (partly damp)	01.01},
{ time:01:23.9	Aston Martin DBS	10.07},
{ time:01:23.9	Koenigsegg CC8S	02.07},
{ time:01:24.0	Ariel Atom 1 220},
{ time:01:24.2	Veritas RS III	12.06},
{ time:01:24.3	Prodrive P2 (concept)	08.05},
{ time:01:24.4	Audi R8 (damp)	10.02},
{ time:01:24.4	Aston Martin Virage	17.02},
{ time:01:24.6	TVR Sagaris	06.07},
{ time:01:24.8	Mitsubishi Lancer Evolution VIII MR FQ-400(damp)	05.07},
{ time:01:24.8	TVR Tuscan Mk.II	06.03},
{ time:01:24.9	Bentley Continental Supersports[5]	15.01},
{ time:01:24.9	Porsche Boxster Spyder	15.02},
{ time:01:24.9	Mercedes-Benz E63 AMG	15.03},
{ time:01:25.0	Noble M12 GTO-3R	01.02},
{ time:01:25.0	BMW 1 Series M Coupe (damp)	17.01},
{ time:01:25.0	Caterham R400},
{ time:01:25.1	Lotus Exige S	08.03},
{ time:01:25.3	Porsche Panamera turbo	15.03},
{ time:01:25.3	BMW M3 (E90 Saloon)	10.10},
{ time:01:25.4	Ford GT40	05.08},
{ time:01:25.7	Lotus Evora	13.01},
{ time:01:25.7	Audi RS4[6]	07.02},
{ time:01:25.7	Lamborghini Gallardo Spyder	08.07},
{ time:01:25.8	Lamborghini Gallardo (wet)	03.04},
{ time:01:25.9	Morgan Aero 8 GTN	05.05},
{ time:01:26.0	Mercedes-Benz CLK 63 AMG Black series	11.02},
{ time:01:26.0	BMW Z4 M roadster (E85)	08.04},
{ time:01:26.0	Noble M400 (Shown on Top Gear Revved Up DVD)},
{ time:01:26.0	Mitsubishi Lancer Evolution VIII MR FQ320	04.04},
{ time:01:26.2	BMW M5 (E60)	06.09},
{ time:01:26.2	Porsche 911 Carrera S (997) (damp)	10.02},
{ time:01:26.2	Brabus S Biturbo Roadster	09.04},
{ time:01:26.3	Vauxhall VXR8 Bathurst S	13.07},
{ time:01:26.4	Lotus Exige (mildly moist)	04.01},
{ time:01:26.5	BMW M3 E92 Competition Pack (moist)	16.05},
{ time:01:26.7	Porsche Cayman S[6]	07.02},
{ time:01:26.7	Jaguar XFR	13.05},
{ time:01:26.8	Chevrolet Corvette C6 LS2	04.10},
{ time:01:26.8	Aston Martin V12 Vantage (Not Shown on TV)[4]},
{ time:01:26.8	Ferrari 575M Maranello GTC	05.04},
{ time:01:26.9	Lexus IS-F	12.05},
{ time:01:26.9	Mercedes-Benz CLS55 AMG	06.01},
{ time:01:27:0	BMW M5 E39},
{ time:01:27:0	KTM X-Bow (Driven by new Stig)},
{ time:01:27.1	Aston Martin Vanquish S	05.04},
{ time:01:27.1	Aston Martin DB9	04.01},
{ time:01:27.1	HSV Maloo	13.07},
{ time:01:27.2	Porsche 911 GT3 (996) (very wet; last car tested by Black Stig prior to HMS Invincible "incident")	03.01},
{ time:01:27.2	Tesla Roadster (mildly moist)	12.07},
{ time:01:27.3	Spyker C8 Spyder (with hard top)	04.07},
{ time:01:27.4	Aston Martin DBS (wet)	10.07},
{ time:01:27.5	Audi RS5 (moist)	16.05},
{ time:01:27.5	Nissan 370Z GT	13.06},
{ time:01:27.5	TVR T350C	02.10},
{ time:01:27.7	Cosworth Impreza STI CS400 (wet)	16.03},
{ time:01:27.7	Renault Mégane RenaultSport Cup 265	19.04},
{ time:01:27.9	Wiesmann MF 3	06.03},
{ time:01:27.9	Chevrolet Camaro SS	15.03},
{ time:01:28.0	Roush Mustang	09.06},
{ time:01:28.0	BMW M3 CSL (E46) (wet)[7]	03.02},
{ time:01:28.1	Renault Mégane R26.R	13.04},
{ time:01:28.2	BMW Z4 sDrive35i (E89)	13.06},
{ time:01:28.2	BMW X5 M (E70) (wet)	14.04},
{ time:01:28.2	Mitsubishi Lancer Evolution X FQ-300	11.02},
{ time:01:28.2	Marcos TSO GT2	07.05},
{ time:01:28.2	Lotus Elise Sport 190},
{ time:01:28.2	Subaru Impreza WRX STI	11.02},
{ time:01:28.3	Vauxhall Astra VXR	19.04},
{ time:01:28.5	Dodge Viper SRT-10 (very wet)	05.03},
{ time:01:28.6	MG XPower SV	03.07},
{ time:01:28.7	Porsche Boxster S	08.04},
{ time:01:28.7	Audi TT MTM Bimoto (cold tyres)	01.10},
{ time:01:28.9	Mitsubishi Lancer Evolution VIII MR FQ-300},
{ time:01:28.9	Porsche 997 Carrera S (very wet)},
{ time:01:29.0	Mercedes-Benz CL65 AMG	04.09},
{ time:01:29.0	Lamborghini Murciélago (partly damp)	01.01},
{ time:01:29.0	Alpina Z8 Roadster},
{ time:01:29.2	BMW M5 (F10) (Very Wet)	18.07},
{ time:01:29.3	Ford Focus RS Mk II	13.04},
{ time:01:29.4	Subaru Impreza WRX STI WR1	04.04},
{ time:01:29.4	Range Rover Sport	20.06},
{ time:01:29.6	Volkswagen Golf GTI Mk VII (Sport Mode)	20.03},
{ time:01:29.6	Volkswagen Golf GTI W12-650 Concept	10.01},
{ time:01:29.6	Ford Focus ST	19.04},
{ time:01:30.0	Autodelta Alfa Romeo 147 GTA 3.7},
{ time:01:30.0	Ford Shelby GT500	09.06},
{ time:01:30.1	Subaru Impreza WRX STi},
{ time:01:30.1	Vauxhall Monaro VXR	06.11},
{ time:01:30.3	Alfa Romeo Giulietta Quadrifoglio Verde},
{ time:01:30.4	Aston Martin DB7 GT (with full tank of fuel)	02.04},
{ time:01:30.4	Volkswagen Golf R32 mk.V	07.06},
{ time:01:30.8	Focus RS 500 (wet)	16.03},
{ time:01:30.9	Audi S4 quattro 4.2	2.02},
{ time:01:31.0	Vauxhall Corsa VXR Nurburgring (partly snowy)	18.03},
{ time:01:31.0	Porsche 996 Turbo (very wet)},
{ time:01:31.2	BMW 760Li (wet)	14.01},
{ time:01:31.3	Vauxhall VX220 Turbo	02.06},
{ time:01:31.3	Vauxhall VXR8 (wet)	10.08},
{ time:01:31.3	Toyota GT86 (partly wet)	19.03},
{ time:01:31.4	Audi TT Mk.II 2.0T	09.02},
{ time:01:31.6	Honda NSX-R (wet)	01.10},
{ time:01:31.8	BMW M3 E46	2.02},
{ time:01:31.8	BMW 535d	06.10},
{ time:01:31.8	Nissan 350Z	03.05},
{ time:01:31.8	Mazda RX-8	03.05},
{ time:01:31.9	BMW 130i (E87)	07.06},
{ time:01:32.0	Renaultsport Clio 200T	20.01},
{ time:01:32.7	Ford Fiesta ST	20.01},
{ time:01:33.2	Peugeot 208 GTi	20.01},
{ time:01:32.1	Mercedes-Benz S63 AMG (wet)	14.01},
{ time:01:32.2	Ford Focus RS Mk I	01.02},
{ time:01:32.2	Mazda 6 MPS	08.06},
{ time:01:32.5	Renaultsport Mégane 225 Cup},
{ time:01:32.5	Lotus Esprit V8 (cold tyres)	01.10},
{ time:01:32.7	Audi TT 3.2 quattro},
{ time:01:32.8	Jaguar E-Type (modernised)	06.05},
{ time:01:36.5	Honda Civic Type-R (EP3-2004 Facelifted)	05.06},
{ time:01:32.9	SEAT León Cupra R	05.06},
{ time:01:32.9	Mercedes-Benz SLK350	05.07},
{ time:01:33.0	Audi RS6 (very wet)	01.08},
{ time:01:33.0	Vauxhall Astra VXR	06.09},
{ time:01:33.0	Mercedes-Benz SL55 AMG (owned by Jeremy Clarkson at the time) (very wet)	01.06},
{ time:01:33.1	Noble M12 GTO (wet)	01.02},
{ time:01:33.2	Audi Q7 V12 (wet)	14.04},
{ time:01:33.3	Volkswagen Golf Mk.IV R32},
{ time:01:33.4	Cadillac CTS-V First Generation (very wet)	06.04},
{ time:01:33.5	Honda Civic Type-R (FN2-2007)	10.06},
{ time:01:33.5	SEAT Leon Cupra Mk2},
{ time:01:33.7	MG ZT 260	04.05},
{ time:01:33.7	Volkswagen Golf Mk.V GTI	05.06},
{ time:01:33.7	2002 Honda NSX (very wet)},
{ time:01:33.8	Clio Renault Sport 182	04.06},
{ time:01:33.9	Holden Monaro (wet)	03.06},
{ time:01:34.0	Renault Mégane 225	05.06},
{ time:01:34.0	Renault Clio 200 Cup (Not Shown on TV)[4]},
{ time:01:34.2	MINI Cooper S Works	05.06},
{ time:01:34.2	Ford Mondeo ST220	08.06},
{ time:01:34.7	Jaguar XKR (melted snow)	09.01},
{ time:01:34.9	Ford Focus ST (wet)	07.03},
{ time:01:35.0	Volvo S60 R	02.09},
{ time:01:35.2	Ferrari 575M Maranello (very wet)	01.04},
{ time:01:35.3	Vauxhall Vectra VXR	08.06},
{ time:01:35.4	Renault Avantime (tuned by presenters)	12.03},
{ time:01:35.5	Fiat 500 Abarth Essesse SS},
{ time:01:35:5	Mercedes-Benz E55 AMG (very wet)	01.08},
{ time:01:35.6	Alfa Romeo 147 GTA	02.08},
{ time:01:35.6	Lotus Elise (wet)},
{ time:01:35.8	Citroën C4 VTS	05.06},
{ time:01:36.2	Aston Martin Vanquish (very wet)	01.04},
{ time:01:36.2	Renaultsport Clio V6 (very wet)},
{ time:01:36.9	Alfa Romeo Brera 2.2	09.02},
{ time:01:37.0	Mercedes-Benz SL500 (Ronnie O'Sullivan's)	04.04},
{ time:01:37.0	Porsche Boxster (very wet)	03.02},
{ time:01:37.3	BMW Z4 3.0i (very wet) (E85)},
{ time:01:37.4	Honda S2000 (very wet)},
{ time:01:37.9	Saab 9-5 Aero	03.03},
{ time:01:38.0	Maserati 4200 GT (very wet)},
{ time:01:38.06	Honda Civic Type-R (EP3)},
{ time:01:38.2	Alfa Romeo 8C Competizione (very wet)	11.04},
{ time:01:39:0	Subaru Impreza WRX (Europe-spec)},
{ time:01:39.4	Bowler Wildcat	02.01},
{ time:01:40.4	Morgan 3 Wheeler	18.06},
{ time:01:40.8	Bentley Arnage T (wet)	01.05},
{ time:01:42.5	"Modified" Renault Avantime	12.03},
{ time:01:43:2	BMW 318ti	01.04},
{ time:01:44.0	Overfinch 580 S (very wet)	02.10},
{ time:01:46.0	Aston Martin DB5	06.05},
{ time:01:48.2	Hawk HF3000 (wet) (Lancia Stratos kit car with Alfa Romeo V6 engine – vehicle spun twice during timed lap)	14.03},
{ time:01:50.3	Spitfire Bentley	18.06},
{ time:02:02.5	Brutus	18.06},
{ time:18:37.0	Porsche Pain Au Chocolat (Foot pedalled by Richard Hammond)	15.05},
{ time:DNF	Porsche 959 (Broke down during lap; Driven into garage rather than continuing the lap)	16.06},
{ time:DNF	Reliant Robin (Rolled on the first corner)	15.02},
{ time:DNS	Ferrari F40 (Car did not start; Broke down at the start line)	16.06}
];