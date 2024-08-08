export const weapons = {
    // ПАТРОНЫ
    ammo: {
        '9mm': {
            name: {
                ru: '9мм патроны',
                ua: '9мм патрони',
                en: '9mm ammo',
                de: '9mm Munition',
                pl: 'Amunicja 9mm',
            },
            desc: {
                ru: 'Коробка с патронами 9мм, идеально подходящими для большинства пистолетов и некоторых автоматов.',
                ua: 'Коробка з патронами 9мм, ідеально підходять для більшості пістолетів та деяких автоматів.',
                en: 'A box of 9mm ammo, perfect for most pistols and some automatics.',
                de: 'Eine Schachtel mit 9mm Patronen, ideal für die meisten Pistolen und einige Automatikwaffen.',
                pl: 'Pudełko z amunicją 9mm, idealne do większości pistoletów i niektórych automatów.',
            },
        },
        '12gauge': {
            name: {
                ru: '12-калибровые патроны',
                ua: '12-каліброві патрони',
                en: '12-gauge ammo',
                de: '12-Kaliber Munition',
                pl: 'Amunicja 12-kalibrowa',
            },
            desc: {
                ru: 'Коробка с 12-калибровыми патронами, обеспечивающими мощный выстрел из дробовика.',
                ua: 'Коробка з 12-калібровими патронами, що забезпечують потужний постріл з рушниці.',
                en: 'A box of 12-gauge ammo, providing a powerful shot from a shotgun.',
                de: 'Eine Schachtel mit 12-Kaliber Patronen, die einen kräftigen Schuss aus einer Schrotflinte ermöglichen.',
                pl: 'Pudełko z amunicją 12-kalibrową, zapewniającą potężny strzał z strzelby.',
            },
        },
        '556mm': {
            name: {
                ru: '5.56мм патроны',
                ua: '5.56мм патрони',
                en: '5.56mm ammo',
                de: '5,56mm Munition',
                pl: 'Amunicja 5,56mm',
            },
            desc: {
                ru: 'Коробка с 5.56мм патронами, обеспечивающими высокую точность и урон при стрельбе из автомата.',
                ua: 'Коробка з 5.56мм патронами, що забезпечують високу точність та пошкодження при стрільбі з автомата.',
                en: 'A box of 5.56mm ammo, providing high accuracy and damage when firing from an automatic rifle.',
                de: 'Eine Schachtel mit 5,56mm Patronen, die eine hohe Genauigkeit und Schaden beim Schießen aus einem Automatikgewehr ermöglichen.',
                pl: 'Pudełko z amunicją 5,56mm, zapewniającą wysoką celność i obrażenia podczas strzelania z karabinu automatycznego.',
            },
        },
        308: {
            name: {
                ru: '.308 патроны',
                ua: '.308 патрони',
                en: '.308 ammo',
                de: '.308 Munition',
                pl: 'Amunicja .308',
            },
            desc: {
                ru: 'Коробка с .308 патронами, обеспечивающими высокую точность на дальних дистанциях при стрельбе из снайперской винтовки.',
                ua: 'Коробка з .308 патронами, що забезпечують високу точність на великих відстанях при стрільбі зі снайперської гвинтівки.',
                en: 'A box of .308 ammo, providing high accuracy at long distances when firing from a sniper rifle.',
                de: 'Eine Schachtel mit .308 Patronen, die eine hohe Genauigkeit auf weite Entfernungen beim Schießen aus einem Scharfschützengewehr ermöglichen.',
                pl: 'Pudełko z amunicją .308, zapewniającą wysoką celność na dużych dystansach podczas strzelania z karabinu snajperskiego.',
            },
        },
        '762mm': {
            name: {
                ru: '7.62мм патроны',
                ua: '7.62мм патрони',
                en: '7.62mm ammo',
                de: '7,62mm Munition',
                pl: 'Amunicja 7,62mm',
            },
            desc: {
                ru: 'Коробка с 7.62мм патронами, обеспечивающими высокую точность и урон при стрельбе из винтовки с оптическим прицелом.',
                ua: 'Коробка з 7.62мм патронами, що забезпечують високу точність та пошкодження при стрільбі з гвинтівки з оптичним прицілом.',
                en: 'A box of 7.62mm ammo, providing high accuracy and damage when firing from a rifle with an optical sight.',
                de: 'Eine Schachtel mit 7,62mm Patronen, die eine hohe Genauigkeit und Schaden beim Schießen aus einem Gewehr mit optischem Visier ermöglichen.',
                pl: 'Pudełko z amunicją 7,62mm, zapewniającą wysoką celność i obrażenia podczas strzelania z karabinu z celownikiem optycznym.',
            },
        },
        '45acp': {
            name: {
                ru: '.45 ACP патроны',
                ua: '.45 ACP патрони',
                en: '.45 ACP ammo',
                de: '.45 ACP Munition',
                pl: 'Amunicja .45 ACP',
            },
            desc: {
                ru: 'Коробка с .45 ACP патронами, обеспечивающими высокую скорострельность и урон при стрельбе из пистолета-пулемета.',
                ua: 'Коробка з .45 ACP патронами, що забезпечують високу швидкострільність та пошкодження при стрільбі з пістолета-кулемета.',
                en: 'A box of .45 ACP ammo, providing high rate of fire and damage when shooting from a submachine gun.',
                de: 'Eine Schachtel mit .45 ACP Patronen, die eine hohe Feuerrate und Schaden beim Schießen aus einer Maschinenpistole ermöglichen.',
                pl: 'Pudełko z amunicją .45 ACP, zapewniającą wysoką szybkostrzelność i obrażenia podczas strzelania z pistoletu maszynowego.',
            },
        },
    },
    // ГАНЫ
    weapon: {
        nightstick: {
            name: {
                ru: 'Дубинка',
                ua: 'Дубинка',
                en: 'Nightstick',
                de: 'Polizeiknüppel',
                pl: 'Pałka policyjna',
            },
            desc: {
                ru: 'Прочное ручное оружие из дерева или металла, используемое для нанесения ударов.',
                ua: 'Міцна ручна зброя з дерева або металу, яка використовується для нанесення ударів.',
                en: 'A sturdy handheld weapon made of wood or metal, used to inflict blows.',
                de: 'Eine robuste Handwaffe aus Holz oder Metall, die zum Schlagen verwendet wird.',
                pl: 'Trwała broń ręczna z drewna lub metalu, używana do zadawania uderzeń.',
            },
        },
        knife: {
            name: {
                ru: 'Нож',
                ua: 'Ніж',
                en: 'Knife',
                de: 'Messer',
                pl: 'Nóż',
            },
            desc: {
                ru: 'Военный нож',
                ua: 'Військовий ніж',
                en: 'Military knife',
                de: 'Militärisches Messer',
                pl: 'Nóż wojskowy',
            },
        },
        bat: {
            name: {
                ru: 'Бита',
                ua: 'Бита',
                en: 'Bat',
                de: 'Schläger',
                pl: 'Kij',
            },
            desc: {
                ru: 'Простая и надежная бита для защиты и нападения.',
                ua: 'Проста і надійна бита для захисту та нападу.',
                en: 'A simple and reliable bat for defense and offense.',
                de: 'Ein einfacher und zuverlässiger Schläger zur Verteidigung und Angriff.',
                pl: 'Prosty i niezawodny kij do obrony i ataku.',
            },
        },
        crowbar: {
            name: {
                ru: 'Монтировка',
                ua: 'Монтажка',
                en: 'Crowbar',
                de: 'Brecheisen',
                pl: 'Łom',
            },
            desc: {
                ru: 'Инструмент, используемый для силового вскрытия или разрушения.',
                ua: 'Інструмент, що використовується для силового відкриття або знищення.',
                en: 'A tool used for forcible entry or destruction.',
                de: 'Ein Werkzeug, das für gewaltsames Eindringen oder Zerstörung verwendet wird.',
                pl: 'Narzędzie służące do siłowego wejścia lub zniszczenia.',
            },
        },
        hammer: {
            name: {
                ru: 'Молоток',
                ua: 'Молоток',
                en: 'Hammer',
                de: 'Hammer',
                pl: 'Młotek',
            },
            desc: {
                ru: 'Инструмент, используемый для забивания гвоздей или разрушения.',
                ua: 'Інструмент, що використовується для забивання цвяхів або знищення.',
                en: 'A tool used for driving nails or destruction.',
                de: 'Ein Werkzeug, das zum Eintreiben von Nägeln oder zur Zerstörung verwendet wird.',
                pl: 'Narzędzie służące do wbijania gwoździ lub niszczenia.',
            },
        },
        hatchet: {
            name: {
                ru: 'Топорик',
                ua: 'Сокира',
                en: 'Hatchet',
                de: 'Beil',
                pl: 'Siekiera',
            },
            desc: {
                ru: 'Маленький топорик для различных задач, таких как рубка дерева.',
                ua: 'Малий топірець для різних завдань, таких як рубка дерева.',
                en: 'A small axe used for various tasks such as chopping wood.',
                de: 'Eine kleine Axt, die für verschiedene Aufgaben wie das Hacken von Holz verwendet wird.',
                pl: 'Mała siekiera używana do różnych zadań, takich jak rąbanie drewna.',
            },
        },
        flashlight: {
            name: {
                ru: 'Фонарик',
                ua: 'Ліхтарик',
                en: 'Flashlight',
                de: 'Taschenlampe',
                pl: 'Latarka',
            },
            desc: {
                ru: 'Портативный источник света, который можно использовать в темноте.',
                ua: 'Портативний джерело світла, яке можна використовувати у темряві.',
                en: 'A portable light source that can be used in the dark.',
                de: 'Eine tragbare Lichtquelle, die im Dunkeln verwendet werden kann.',
                pl: 'Przenośne źródło światła, które można używać w ciemności.',
            },
        },
        wrench: {
            name: {
                ru: 'Разводной ключ',
                ua: 'Розбірний ключ',
                en: 'Adjustable Wrench',
                de: 'Verstellbarer Schraubenschlüssel',
                pl: 'Klucz nastawny',
            },
            desc: {
                ru: 'Инструмент, используемый для работы с гаечными соединениями.',
                ua: "Інструмент, що використовується для роботи з гайковими з'єднаннями.",
                en: 'A tool used for working with nut and bolt connections.',
                de: 'Ein Werkzeug, das zum Arbeiten mit Schraubenverbindungen verwendet wird.',
                pl: 'Narzędzie służące do pracy z połączeniami śrubowymi.',
            },
        },
        golfclub: {
            name: {
                ru: 'Клюшка для гольфа',
                ua: 'Кий для гольфу',
                en: 'Golf Club',
                de: 'Golf Schläger',
                pl: 'Kij golfowy',
            },
            desc: {
                ru: 'Инструмент, используемый в игре в гольф для удара по мячу.',
                ua: "Інструмент, що використовується в грі в гольф для удару по м'ячу.",
                en: 'A tool used in the game of golf to strike the ball.',
                de: 'Ein Werkzeug, das im Golfspiel zum Schlagen des Balls verwendet wird.',
                pl: 'Narzędzie używane w grze w golfa do uderzania piłki.',
            },
        },
        poolcue: {
            name: {
                ru: 'Бильярдный кий',
                ua: 'Більярдний кий',
                en: 'Pool Cue',
                de: 'Billard Queue',
                pl: 'Kij bilardowy',
            },
            desc: {
                ru: 'Инструмент, используемый в игре в бильярд для удара по шару.',
                ua: 'Інструмент, що використовується в грі в більярд для удару по кулі.',
                en: 'A tool used in the game of pool to strike the ball.',
                de: 'Ein Werkzeug, das im Billardspiel zum Schlagen des Balls verwendet wird.',
                pl: 'Narzędzie używane w grze w bilard do uderzania piłki.',
            },
        },
        petrolcan: {
            name: {
                ru: 'Канистра с бензином',
                ua: 'Каністра з бензином',
                en: 'Petrol Can',
                de: 'Benzinkanister',
                pl: 'Kanister z benzyną',
            },
            desc: {
                ru: 'Контейнер для хранения и перевозки бензина.',
                ua: 'Контейнер для зберігання і транспортування бензину.',
                en: 'A container used for storing and transporting petrol.',
                de: 'Ein Behälter, der zum Lagern und Transportieren von Benzin verwendet wird.',
                pl: 'Pojemnik służący do przechowywania i transportu benzyny.',
            },
        },
        dagger: {
            name: {
                ru: 'Кавалерийский кинжал',
                ua: 'Кавалерійський кинджал',
                en: 'Cavalry Dagger',
                de: 'Kavallerie Dolch',
                pl: 'Szponton kawaleryjski',
            },
            desc: {
                ru: 'Оружие с коротким лезвием и рукояткой, используемое в качестве холодного оружия.',
                ua: 'Зброя з коротким лезом і рукояткою, яке використовується як холодна зброя.',
                en: 'A weapon with a short blade and handle, used as a cold ',
                de: 'Eine Waffe mit kurzer Klinge und Griff, die als Kaltwaffe verwendet wird.',
                pl: 'Broń o krótkim ostrzu i rękojeści, używana jako broń biała.',
            },
        },
        knuckle: {
            name: {
                ru: 'Кастет',
                ua: 'Кастет',
                en: 'Knuckle Duster',
                de: 'Schlagring',
                pl: 'Kastet',
            },
            desc: {
                ru: 'Ручное холодное оружие, предназначенное для усиления ударов кулаками.',
                ua: 'Ручна холодна зброя, призначена для посилення ударів кулаками.',
                en: 'Handheld cold weapon designed to enhance punches.',
                de: 'Handgeführte Kaltwaffe, die dazu dient, Schläge zu verstärken.',
                pl: 'Ręczna broń biała zaprojektowana do wzmocnienia ciosów pięściami.',
            },
        },
        machete: {
            name: {
                ru: 'Мачете',
                ua: 'Мачете',
                en: 'Machete',
                de: 'Machete',
                pl: 'Maczeta',
            },
            desc: {
                ru: 'Крупный нож с широким лезвием, используемый для рубки и разрубания.',
                ua: 'Великий ніж з широким лезом, що використовується для рубання та розрубування.',
                en: 'A large knife with a broad blade, used for cutting and chopping.',
                de: 'Ein großes Messer mit breiter Klinge, das zum Schneiden und Hacken verwendet wird.',
                pl: 'Duży nóż o szerokim ostrzu, używany do cięcia i krojenia.',
            },
        },
        battleaxe: {
            name: {
                ru: 'Боевой топор',
                ua: 'Бойова сокира',
                en: 'Battleaxe',
                de: 'Streitaxt',
                pl: 'Topór bojowy',
            },
            desc: {
                ru: 'Тяжелый топор с длинной ручкой, применяемый в бою.',
                ua: 'Важкий топір з довгою ручкою, застосовуваний у бою.',
                en: 'A heavy axe with a long handle, used in combat.',
                de: 'Eine schwere Axt mit einem langen Griff, die im Kampf verwendet wird.',
                pl: 'Ciężki topór z długim uchwytem, używany w walce.',
            },
        },
        pistol: {
            name: {
                ru: 'Пистолет',
                ua: 'Пістолет',
                en: 'Pistol',
                de: 'Pistole',
                pl: 'Pistolet',
            },
            desc: {
                ru: 'Короткоствольное оружие, используется для стрельбы на ближней дистанции.',
                ua: 'Короткоствольна зброя, використовується для стрільби на близькій відстані.',
                en: 'Short-barreled weapon, used for shooting at close range.',
                de: 'Kurzwaffe, für das Schießen auf kurze Distanz verwendet.',
                pl: 'Broń krótkołufowa, używana do strzelania na krótkim dystansie.',
            },
        },
        combatpistol: {
            name: {
                ru: 'Боевой пистолет',
                ua: 'Бойовий пістолет',
                en: 'Combat Pistol',
                de: 'Kampfpistole',
                pl: 'Pistolet bojowy',
            },
            desc: {
                ru: 'Среднеразмерное огнестрельное оружие, обычно используется для самообороны или в ближнем бою.',
                ua: 'Зброя середнього розміру, зазвичай використовується для самозахисту або в близькому бою.',
                en: 'A medium-sized firearm, typically used for self-defense or in close combat.',
                de: 'Eine mittelgroße Schusswaffe, die typischerweise zur Selbstverteidigung oder im Nahkampf verwendet wird.',
                pl: 'Średniej wielkości broń palna, zwykle używana do samoobrony lub w walce wręcz.',
            },
        },
        appistol: {
            name: {
                ru: 'Пистолет AP',
                ua: 'Пістолет AP',
                en: 'AP Pistol',
                de: 'AP-Pistole',
                pl: 'Pistolet AP',
            },
            desc: {
                ru: "Компактное огнестрельное оружие, обычно используется для самообороны или в ближнем бою. AP означает 'бронебойный'.",
                ua: "Компактна вогнепальна зброя, зазвичай використовується для самозахисту або в близькому бою. AP означає 'протиброневий'.",
                en: "A compact firearm, typically used for self-defense or in close combat. AP stands for 'armor-piercing'.",
                de: "Eine kompakte Schusswaffe, die typischerweise zur Selbstverteidigung oder im Nahkampf verwendet wird. AP steht für 'panzerbrechend'.",
                pl: "Kompaktowa broń palna, zwykle używana do samoobrony lub w walce wręcz. AP oznacza 'przebijający pancerz'.",
            },
        },
        pistol50: {
            name: {
                ru: 'Пистолет .50',
                ua: 'Пістолет .50',
                en: 'Pistol .50',
                de: '.50 Pistole',
                pl: 'Pistolet .50',
            },
            desc: {
                ru: 'Мощное огнестрельное оружие, использующее патроны калибра .50. Обычно используется для самообороны или в ближнем бою.',
                ua: 'Потужна вогнепальна зброя, яка використовує патрони калібру .50. Зазвичай використовується для самозахисту або в близькому бою.',
                en: 'A powerful firearm that uses .50 caliber ammunition. Typically used for self-defense or in close combat.',
                de: 'Eine leistungsstarke Schusswaffe, die .50-Kaliber-Munition verwendet. Typischerweise für die Selbstverteidigung oder im Nahkampf verwendet.',
                pl: 'Potężna broń palna, która używa amunicji kal. .50. Zwykle używana do samoobrony lub w walce wręcz.',
            },
        },
        snspistol: {
            name: {
                ru: 'Пистолет SNS',
                ua: 'Пістолет SNS',
                en: 'SNS Pistol',
                de: 'SNS-Pistole',
                pl: 'Pistolet SNS',
            },
            desc: {
                ru: 'Компактное огнестрельное оружие, обычно используется для самообороны или в ближнем бою.',
                ua: 'Компактна вогнепальна зброя, зазвичай використовується для самозахисту або в близькому бою.',
                en: 'A compact firearm, typically used for self-defense or in close combat.',
                de: 'Eine kompakte Schusswaffe, die typischerweise zur Selbstverteidigung oder im Nahkampf verwendet wird.',
                pl: 'Kompaktowa broń palna, zwykle używana do samoobrony lub w walce wręcz.',
            },
        },
        snspistolmkii: {
            name: {
                ru: 'Пистолет SNS Mk II',
                ua: 'Пістолет SNS Mk II',
                en: 'SNS Pistol Mk II',
                de: 'SNS-Pistole Mk II',
                pl: 'Pistolet SNS Mk II',
            },
            desc: {
                ru: 'Улучшенная версия пистолета SNS, обычно используется для самообороны или в ближнем бою.',
                ua: 'Покращена версія пістолета SNS, зазвичай використовується для самозахисту або в близькому бою.',
                en: 'An upgraded version of the SNS Pistol, typically used for self-defense or in close combat.',
                de: 'Eine verbesserte Version der SNS-Pistole, die typischerweise zur Selbstverteidigung oder im Nahkampf verwendet wird.',
                pl: 'Ulepszona wersja pistoletu SNS, zwykle używana do samoobrony lub w walce wręcz.',
            },
        },
        heavypistol: {
            name: {
                ru: 'Тяжелый пистолет',
                ua: 'Важкий пістолет',
                en: 'Heavy Pistol',
                de: 'Schwere Pistole',
                pl: 'Ciężki pistolet',
            },
            desc: {
                ru: 'Большое и мощное огнестрельное оружие, обычно используется для самообороны или в ближнем бою.',
                ua: 'Велика та потужна вогнепальна зброя, зазвичай використовується для самозахисту або в близькому бою.',
                en: 'A large and powerful firearm, typically used for self-defense or in close combat.',
                de: 'Eine große und leistungsstarke Schusswaffe, die typischerweise zur Selbstverteidigung oder im Nahkampf verwendet wird.',
                pl: 'Duża i potężna broń palna, zwykle używana do samoobrony lub w walce wręcz.',
            },
        },
        vintagepistol: {
            name: {
                ru: 'Винтажный пистолет',
                ua: 'Вінтажний пістолет',
                en: 'Vintage Pistol',
                de: 'Vintage-Pistole',
                pl: 'Pistolet vintage',
            },
            desc: {
                ru: 'Старинное огнестрельное оружие, обычно используется для самообороны или в ближнем бою.',
                ua: 'Старовинна вогнепальна зброя, зазвичай використовується для самозахисту або в близькому бою.',
                en: 'An antique firearm, typically used for self-defense or in close combat.',
                de: 'Eine antike Schusswaffe, die typischerweise zur Selbstverteidigung oder im Nahkampf verwendet wird.',
                pl: 'Antyczna broń palna, zwykle używana do samoobrony lub w walce wręcz.',
            },
        },
        marksmanpistol: {
            name: {
                ru: 'Пистолет-марксман',
                ua: 'Пістолет-марксман',
                en: 'Marksman Pistol',
                de: 'Marksman-Pistole',
                pl: 'Pistolet strzelecki',
            },
            desc: {
                ru: 'Огнестрельное оружие, обычно используется для точной стрельбы на средней дистанции.',
                ua: 'Вогнепальна зброя, зазвичай використовується для точної стрільби на середній відстані.',
                en: 'A firearm, typically used for accurate shooting at medium range.',
                de: 'Eine Schusswaffe, die typischerweise für genaues Schießen auf mittlere Entfernung verwendet wird.',
                pl: 'Broń palna, zwykle używana do celnej strzelaniny na średnim dystansie.',
            },
        },
        revolver: {
            name: {
                ru: 'Револьвер',
                ua: 'Револьвер',
                en: 'Revolver',
                de: 'Revolver',
                pl: 'Rewolwer',
            },
            desc: {
                ru: 'Короткоствольное оружие с вращающимся барабаном для патронов.',
                ua: 'Короткоствольна зброя з обертовим барабаном для патронів.',
                en: 'A short-barreled firearm with a rotating cylinder for bullets.',
                de: 'Eine kurzläufige Schusswaffe mit einer drehbaren Trommel für Patronen.',
                pl: 'Broń krótkostrzałowa z obracającym się bębnem na pociski.',
            },
        },
        ceramicpistol: {
            name: {
                ru: 'Керамический пистолет',
                ua: 'Керамічний пістолет',
                en: 'Ceramic Pistol',
                de: 'Keramikpistole',
                pl: 'Pistolet ceramiczny',
            },
            desc: {
                ru: 'Пистолет, изготовленный из керамических материалов для уменьшения массы и обнаружимости металлодетекторами.',
                ua: 'Пістолет, виготовлений з керамічних матеріалів для зменшення маси та виявимості металодетекторами.',
                en: 'A pistol made from ceramic materials to reduce weight and metal detector detectability.',
                de: 'Eine Pistole aus keramischen Materialien zur Gewichtsreduzierung und Metall-Detektierbarkeit.',
                pl: 'Pistolet wykonany z materiałów ceramicznych w celu zmniejszenia wagi i wykrywalności przez wykrywacze metali.',
            },
        },
        heavyrevolvermkii: {
            name: {
                ru: 'Тяжелый револьвер Mk II',
                ua: 'Важкий револьвер Mk II',
                en: 'Heavy Revolver Mk II',
                de: 'Schwerer Revolver Mk II',
                pl: 'Ciężki rewolwer Mk II',
            },
            desc: {
                ru: 'Улучшенная версия тяжелого револьвера, обычно используется для самообороны или в ближнем бою.',
                ua: 'Покращена версія важкого револьвера, зазвичай використовується для самозахисту або в близькому бою.',
                en: 'An upgraded version of the heavy revolver, typically used for self-defense or in close combat.',
                de: 'Eine verbesserte Version des schweren Revolvers, die typischerweise zur Selbstverteidigung oder im Nahkampf verwendet wird.',
                pl: 'Ulepszona wersja ciężkiego rewolweru, zwykle używana do samoobrony lub w walce wręcz.',
            },
        },
        doubleactionrevolver: {
            name: {
                ru: 'Револьвер Double Action',
                ua: 'Револьвер Double Action',
                en: 'Double Action Revolver',
                de: 'Double-Action-Revolver',
                pl: 'Rewolwer Double Action',
            },
            desc: {
                ru: 'Револьвер, который стреляет при каждом нажатии на спусковой крючок, обычно используется для самообороны или в ближнем бою.',
                ua: 'Револьвер, який стріляє при кожному натисканні на спусковий гачок, зазвичай використовується для самозахисту або в близькому бою.',
                en: 'A revolver that fires with each pull of the trigger, typically used for self-defense or in close combat.',
                de: 'Ein Revolver, der bei jedem Abzug feuert, typischerweise zur Selbstverteidigung oder im Nahkampf verwendet.',
                pl: 'Rewolwer, który strzela przy każdym pociągnięciu spustu, zwykle używany do samoobrony lub w walce wręcz.',
            },
        },
        navyrevolver: {
            name: {
                ru: 'Морской револьвер',
                ua: 'Морський револьвер',
                en: 'Navy Revolver',
                de: 'Marine-Revolver',
                pl: 'Rewolwer morski',
            },
            desc: {
                ru: 'Револьвер, который был широко использован в морской пехоте, обычно используется для самообороны или в ближнем бою.',
                ua: 'Револьвер, який був широко використовуваний у морській піхоті, зазвичай використовується для самозахисту або в близькому бою.',
                en: 'A revolver that was widely used in the navy, typically used for self-defense or in close combat.',
                de: 'Ein Revolver, der in der Marine weit verbreitet war, typischerweise zur Selbstverteidigung oder im Nahkampf verwendet.',
                pl: 'Rewolwer, który był szeroko używany w marynarce wojennej, zwykle używany do samoobrony lub w walce wręcz.',
            },
        },
        pericopistol: {
            name: {
                ru: 'Пистолет Perico',
                ua: 'Пістолет Perico',
                en: 'Perico Pistol',
                de: 'Perico-Pistole',
                pl: 'Pistolet Perico',
            },
            desc: {
                ru: 'Уникальный пистолет, обычно используется для самообороны или в ближнем бою.',
                ua: 'Унікальний пістолет, зазвичай використовується для самозахисту або в близькому бою.',
                en: 'A unique pistol, typically used for self-defense or in close combat.',
                de: 'Eine einzigartige Pistole, die typischerweise zur Selbstverteidigung oder im Nahkampf verwendet wird.',
                pl: 'Unikalny pistolet, zwykle używany do samoobrony lub w walce wręcz.',
            },
        },
        flaregun: {
            name: {
                ru: 'Сигнальный пистолет',
                ua: 'Сигнальний пiстолет',
                en: 'Flare Gun',
                de: 'Leuchtpistole',
                pl: 'Pistolet sygnałowy',
            },
            desc: {
                ru: 'Пистолет, предназначенный для запуска сигнальных ракет.',
                ua: 'Пістолет, призначений для запуску сигнальних ракет.',
                en: 'A pistol designed to launch signal flares.',
                de: 'Eine Pistole, die zum Abschießen von Signalraketen konzipiert ist.',
                pl: 'Pistolet zaprojektowany do wystrzeliwania sygnałowych flar.',
            },
        },

        //
        microsmg: {
            name: {
                ru: 'Микро-пистолет-пулемет',
                ua: 'Мікро-пістолет-кулемет',
                en: 'Micro SMG',
                de: 'Mikro-SMG',
                pl: 'Mikro SMG',
            },
            desc: {
                ru: 'Компактное автоматическое оружие, обычно используется для ближнего боя.',
                ua: 'Компактна автоматична зброя, зазвичай використовується для близького бою.',
                en: 'A compact automatic weapon, typically used in close combat.',
                de: 'Eine kompakte automatische Waffe, die typischerweise im Nahkampf verwendet wird.',
                pl: 'Kompaktowa broń automatyczna, zwykle używana w walce wręcz.',
            },
        },
        smg: {
            name: {
                ru: 'Пистолет-пулемет',
                ua: 'Пістолет-кулемет',
                en: 'SMG',
                de: 'SMG',
                pl: 'SMG',
            },
            desc: {
                ru: 'Автоматическое оружие, обычно используется для ближнего боя.',
                ua: 'Автоматична зброя, зазвичай використовується для близького бою.',
                en: 'An automatic weapon, typically used in close combat.',
                de: 'Eine automatische Waffe, die typischerweise im Nahkampf verwendet wird.',
                pl: 'Broń automatyczna, zwykle używana w walce wręcz.',
            },
        },
        smg_mk2: {
            name: {
                ru: 'Пистолет-пулемет Mk II',
                ua: 'Пістолет-кулемет Mk II',
                en: 'SMG Mk II',
                de: 'SMG Mk II',
                pl: 'SMG Mk II',
            },
            desc: {
                ru: 'Улучшенная версия пистолета-пулемета, обычно используется для ближнего бою.',
                ua: 'Покращена версія пістолета-кулемета, зазвичай використовується для близького бою.',
                en: 'An upgraded version of the SMG, typically used in close combat.',
                de: 'Eine verbesserte Version des SMG, die typischerweise im Nahkampf verwendet wird.',
                pl: 'Ulepszona wersja SMG, zwykle używana w walce wręcz.',
            },
        },
        assaultsmg: {
            name: {
                ru: 'Штурмовой пистолет-пулемет',
                ua: 'Штурмовий пістолет-кулемет',
                en: 'Assault SMG',
                de: 'Sturm-SMG',
                pl: 'SMG szturmowy',
            },
            desc: {
                ru: 'Автоматическое оружие, обычно используется для ближнего боя. Штурмовой пистолет-пулемет обладает большей мощностью и точностью.',
                ua: 'Автоматична зброя, зазвичай використовується для близького бою. Штурмовий пістолет-кулемет має більшу потужність та точність.',
                en: 'An automatic weapon, typically used in close combat. The Assault SMG has greater power and accuracy.',
                de: 'Eine automatische Waffe, die typischerweise im Nahkampf verwendet wird. Das Sturm-SMG hat eine größere Leistung und Genauigkeit.',
                pl: 'Broń automatyczna, zwykle używana w walce wręcz. SMG szturmowy ma większą moc i celność.',
            },
        },
        minismg: {
            name: {
                ru: 'Мини-пистолет-пулемет',
                ua: 'Міні-пістолет-кулемет',
                en: 'Mini SMG',
                de: 'Mini-SMG',
                pl: 'Mini SMG',
            },
            desc: {
                ru: 'Очень компактное автоматическое оружие, обычно используется для самообороны или в ближнем бою.',
                ua: 'Дуже компактна автоматична зброя, зазвичай використовується для самозахисту або в близькому бою.',
                en: 'A very compact automatic weapon, typically used for self-defense or in close combat.',
                de: 'Eine sehr kompakte automatische Waffe, die typischerweise zur Selbstverteidigung oder im Nahkampf verwendet wird.',
                pl: 'Bardzo kompaktowa broń automatyczna, zwykle używana do samoobrony lub w walce wręcz.',
            },
        },
        machinepistol: {
            name: {
                ru: 'Малый ПП',
                ua: 'Малий ПП',
                en: 'Machine Pistol',
                de: 'Maschinenpistole',
                pl: 'Pistolet maszynowy',
            },
            desc: {
                ru: 'Компактное автоматическое оружие с возможностью стрельбы очередями.',
                ua: 'Компактна автоматична зброя з можливістю стрільби чергами.',
                en: 'A compact automatic weapon capable of firing in bursts.',
                de: 'Eine kompakte automatische Waffe mit Feuerstoßfunktion.',
                pl: 'Kompaktowa broń automatyczna zdolna do strzelania seriami.',
            },
        },
        combatpdw: {
            name: {
                ru: 'ПОС',
                ua: 'ПОС',
                en: 'Combat PDW',
                de: 'Kampf-PDW',
                pl: 'Karabinek PDW',
            },
            desc: {
                ru: 'Компактное легкое автоматическое оружие для ближнего боя.',
                ua: 'Компактна легка автоматична зброя для ближнього бою.',
                en: 'A compact lightweight automatic weapon for close-quarters combat.',
                de: 'Eine kompakte, leichte automatische Waffe für den Nahkampf.',
                pl: 'Kompaktowy, lekki karabin automatyczny do walki na bliskie odległości.',
            },
        },
        tecpistol: {
            name: {
                ru: 'Тактический пистолет-пулемет',
                ua: 'Тактичний пістолет-кулемет',
                en: 'Tactical SMG',
                de: 'Taktisches SMG',
                pl: 'Taktyczny SMG',
            },
            desc: {
                ru: 'Автоматическое оружие, обычно используется для ближнего боя. Тактический пистолет-пулемет обладает улучшенной точностью и управляемостью.',
                ua: 'Автоматична зброя, зазвичай використовується для близького бою. Тактичний пістолет-кулемет має покращену точність та керованість.',
                en: 'An automatic weapon, typically used in close combat. The Tactical SMG has improved accuracy and control.',
                de: 'Eine automatische Waffe, die typischerweise im Nahkampf verwendet wird. Das taktische SMG hat eine verbesserte Genauigkeit und Kontrolle.',
                pl: 'Broń automatyczna, zwykle używana w walce wręcz. Taktyczny SMG ma poprawioną celność i kontrolę.',
            },
        },

        //

        pumpshotgun_mk2: {
            name: {
                ru: 'Помповое ружье Mk II',
                ua: 'Помпове рушниця Mk II',
                en: 'Pump Shotgun Mk II',
                de: 'Pump-Action-Schrotflinte Mk II',
                pl: 'Strzelba naładowana pompą Mk II',
            },
            desc: {
                ru: "Это оружие, которое говорит: 'Я серьезно'. Если вы хотите сделать впечатление, ничто не говорит об этом лучше, чем дырка от дробовика.",
                ua: "Це зброя, яка говорить: 'Я серйозно'. Якщо ви хочете справити враження, ніщо не говорить про це краще, ніж дірка від дробовика.",
                en: "This is a weapon that says, 'I mean business'. If you want to make an impression, nothing says it better than a shotgun hole.",
                de: "Dies ist eine Waffe, die sagt: 'Ich meine es ernst'. Wenn Sie einen Eindruck hinterlassen wollen, sagt nichts es besser als ein Schrotflintenloch.",
                pl: "To jest broń, która mówi: 'Mówię poważnie'. Jeśli chcesz zrobić wrażenie, nic nie mówi o tym lepiej niż dziura po strzale z shotguna.",
            },
        },
        assaultshotgun: {
            name: {
                ru: 'Штурмовое ружье',
                ua: 'Штурмова рушниця',
                en: 'Assault Shotgun',
                de: 'Sturm-Schrotflinte',
                pl: 'Strzelba szturmowa',
            },
            desc: {
                ru: 'Когда одного выстрела недостаточно, этот зверь выстреливает целым потоком. Подходит для тех, кто любит разрушения.',
                ua: 'Коли одного пострілу недостатньо, цей звір вистрілює цілим потоком. Підходить для тих, хто любить руйнування.',
                en: "When one shot isn't enough, this beast fires a stream. Suitable for those who love destruction.",
                de: 'Wenn ein Schuss nicht ausreicht, feuert dieses Biest einen Strom ab. Geeignet für diejenigen, die Zerstörung lieben.',
                pl: 'Gdy jeden strzał nie wystarcza, to bestia strzela strumieniem. Odpowiednie dla tych, którzy kochają zniszczenie.',
            },
        },
        musket: {
            name: {
                ru: 'Мушкет',
                ua: 'Мушкет',
                en: 'Musket',
                de: 'Muskete',
                pl: 'Muszkiet',
            },
            desc: {
                ru: 'Вернитесь в прошлое с этим оружием. Мушкет - это классика, которая никогда не выходит из моды.',
                ua: 'Поверніться в минуле з цією зброєю. Мушкет - це класика, яка ніколи не виходить з моди.',
                en: 'Take a step back in time with this weapon. The musket is a classic that never goes out of style.',
                de: 'Machen Sie einen Schritt zurück in die Zeit mit dieser Waffe. Das Musket ist ein Klassiker, der nie aus der Mode kommt.',
                pl: 'Cofnij się w czasie z tą bronią. Muszkiet to klasyk, który nigdy nie wychodzi z mody.',
            },
        },

        sawnoffshotgun: {
            name: {
                ru: 'Дробовик-обрез',
                ua: 'Обрізаний дробовик',
                en: 'Sawn-off Shotgun',
                de: 'Abgesägte Schrotflinte',
                pl: 'Strzelba skrócona',
            },
            desc: {
                ru: 'Короткоствольный дробовик с обрезанным стволом для ближнего боя.',
                ua: 'Короткоствольний дробовик з обрізаним стволом для ближнього бою.',
                en: 'A short-barreled shotgun with a sawn-off barrel for close-quarters combat.',
                de: 'Eine kurzläufige Schrotflinte mit abgesägtem Lauf für den Nahkampf.',
                pl: 'Strzelba o skróconej lufie do walki na bliskie odległości.',
            },
        },
        pumpshotgun: {
            name: {
                ru: 'Помповый дробовик',
                ua: 'Помповий дробовик',
                en: 'Pump Shotgun',
                de: 'Pumpen-Schrotflinte',
                pl: 'Pompowany karabin szturmowy',
            },
            desc: {
                ru: 'Дробовик с механизмом повторной подачи патронов.',
                ua: 'Дробовик з механізмом повторної подачі патронів.',
                en: 'A shotgun with a pump-action mechanism for chambering rounds.',
                de: 'Eine Schrotflinte mit einer Pumpaktion zum Laden von Patronen.',
                pl: 'Strzelba z mechanizmem pompowym do nabijania naboi.',
            },
        },
        bullpupshotgun: {
            name: {
                ru: 'Дробовик «буллпап»',
                ua: 'Дробовик «буллпап»',
                en: 'Bullpup Shotgun',
                de: 'Bullpup-Schrotflinte',
                pl: 'Strzelba Bullpup',
            },
            desc: {
                ru: 'Дробовик с расположением магазина и затвора сзади рукояти.',
                ua: 'Дробовик з розміщенням магазина та затвора ззаду рукояті.',
                en: 'A shotgun with the magazine and action located behind the grip.',
                de: 'Eine Schrotflinte mit dem Magazin und Verschluss hinter dem Griff platziert.',
                pl: 'Strzelba z magazynkiem i zamkiem umieszczonymi za chwytem.',
            },
        },
        heavyshotgun: {
            name: {
                ru: 'Тяжёлый дробовик',
                ua: 'Важкий дробовик',
                en: 'Heavy Shotgun',
                de: 'Schwere Schrotflinte',
                pl: 'Ciężka strzelba',
            },
            desc: {
                ru: 'Мощный и тяжелый дробовик для максимального урона.',
                ua: 'Потужний і важкий дробовик для максимального пошкодження.',
                en: 'A powerful and heavy shotgun for maximum damage.',
                de: 'Eine leistungsstarke und schwere Schrotflinte für maximalen Schaden.',
                pl: 'Mocna i ciężka strzelba o maksymalnym obrażeniu.',
            },
        },
        autoshotgun: {
            name: {
                ru: 'Автоматический дробовик',
                ua: 'Автоматичний дробовик',
                en: 'Automatic Shotgun',
                de: 'Automatische Schrotflinte',
                pl: 'Automatyczna strzelba',
            },
            desc: {
                ru: 'Дробовик с возможностью автоматической стрельбы.',
                ua: 'Дробовик з можливістю автоматичної стрільби.',
                en: 'A shotgun capable of automatic fire.',
                de: 'Eine Schrotflinte, die automatisches Feuer abgeben kann.',
                pl: 'Strzelba zdolna do automatycznego ognia.',
            },
        },

        dbshotgun: {
            name: {
                ru: 'Двуствольное ружье',
                ua: 'Двоствольна рушниця',
                en: 'Double Barrel Shotgun',
                de: 'Doppelläufige Schrotflinte',
                pl: 'Strzelba dwulufowa',
            },
            desc: {
                ru: 'Это оружие для тех, кто хочет убедиться, что цель упала с первого выстрела. Двуствольное ружье - это классика, которая всегда в моде.',
                ua: 'Ця зброя для тих, хто хоче переконатися, що ціль впала з першого пострілу. Двоствольна рушниця - це класика, яка завжди в моді.',
                en: "This is a weapon for those who want to make sure the target goes down with the first shot. The double barrel shotgun is a classic that's always in style.",
                de: 'Dies ist eine Waffe für diejenigen, die sicherstellen wollen, dass das Ziel mit dem ersten Schuss fällt. Die doppelläufige Schrotflinte ist ein Klassiker, der immer im Trend liegt.',
                pl: 'To jest broń dla tych, którzy chcą mieć pewność, że cel padnie za pierwszym strzałem. Dwulufowa strzelba to klasyk, który zawsze jest na czasie.',
            },
        },
        combatshotgun: {
            name: {
                ru: 'Боевое ружье',
                ua: 'Бойова рушниця',
                en: 'Combat Shotgun',
                de: 'Kampfschrotflinte',
                pl: 'Strzelba bojowa',
            },
            desc: {
                ru: 'Когда дела идут плохо, боевое ружье приходит на помощь. Это оружие для тех, кто не боится ближнего боя.',
                ua: 'Коли справи йдуть погано, бойова рушниця приходить на допомогу. Ця зброя для тих, хто не боїться близького бою.',
                en: "When things get tough, the combat shotgun comes to the rescue. This is a weapon for those who aren't afraid of close combat.",
                de: 'Wenn die Dinge hart auf hart kommen, kommt die Kampfschrotflinte zur Rettung. Dies ist eine Waffe für diejenigen, die den Nahkampf nicht scheuen.',
                pl: 'Gdy sytuacja się komplikuje, na ratunek przychodzi strzelba bojowa. To broń dla tych, którzy nie boją się walki wręcz.',
            },
        },

        //

        specialcarbine: {
            name: {
                ru: 'Специальный карабин',
                ua: 'Спеціальний карабін',
                en: 'Special Carbine',
                de: 'Spezialkarabiner',
                pl: 'Karabinek specjalny',
            },
            desc: {
                ru: 'Улучшенный карабин с дополнительными возможностями.',
                ua: 'Покращений карабін з додатковими можливостями.',
                en: 'An improved carbine with additional features.',
                de: 'Ein verbessertes Karabiner mit zusätzlichen Funktionen.',
                pl: 'Ulepszony karabinek z dodatkowymi funkcjami.',
            },
        },

        carbinemk2: {
            name: {
                ru: 'Карабин',
                ua: 'Карабін',
                en: 'Carbine',
                de: 'Karabiner',
                pl: 'Karabin',
            },
            desc: {
                ru: 'Улучшенный карабин с превосходной эргономикой и инновационным системой прицеливания, обеспечивающей максимальную точность в любых условиях боя.',
                ua: 'Удосконалений карабін з винятковою ергономікою та інноваційною системою прицілювання, що забезпечує максимальну точність в будь-яких умовах бою.',
                en: 'An upgraded carbine with exceptional ergonomics and an innovative targeting system, ensuring maximum accuracy in any combat situation.',
                de: 'Ein aufgewertetes Karabiner mit außergewöhnlicher Ergonomie und einem innovativen Zielsystem, das eine maximale Genauigkeit in jeder Kampfsituation gewährleistet.',
                pl: 'Unikalny karabin z doskonałą ergonomią i innowacyjnym systemem celowania, zapewniający maksymalną precyzję w każdej sytuacji bojowej.',
            },
        },
        assaultrifle: {
            name: {
                ru: 'Штурмовая винтовка',
                ua: 'Штурмова гвинтівка',
                en: 'Assault Rifle',
                de: 'Sturmgewehr',
                pl: 'Karabin szturmowy',
            },
            desc: {
                ru: 'Мощная штурмовая винтовка с передовой технологией подавления отдачи, обеспечивающая стремительную точность и надежность в критических моментах.',
                ua: 'Потужна штурмова гвинтівка з передовою технологією подавлення віддачі, що забезпечує стрімку точність та надійність в критичних моментах.',
                en: 'A powerful assault rifle with advanced recoil suppression technology, providing swift accuracy and reliability in critical moments.',
                de: 'Ein leistungsstarkes Sturmgewehr mit fortschrittlicher Rückstoßunterdrückungstechnologie, die eine schnelle Genauigkeit und Zuverlässigkeit in kritischen Momenten bietet.',
                pl: 'Potężny karabin szturmowy z zaawansowaną technologią tłumienia odrzutu, zapewniający szybką precyzję i niezawodność w kluczowych momentach.',
            },
        },
        advancedrifle: {
            name: {
                ru: 'Улучшенная винтовка',
                ua: 'Покращена гвинтівка',
                en: 'Advanced Rifle',
                de: 'Fortgeschrittenes Gewehr',
                pl: 'Zaawansowany karabin',
            },
            desc: {
                ru: 'Современная винтовка с интегрированными оптическими прицелами и уникальной системой быстрой перезарядки, обеспечивающая превосходную маневренность и скорострельность.',
                ua: 'Сучасна гвинтівка з інтегрованими оптичними прицілами та унікальною системою швидкого перезаряду, що забезпечує виняткову маневреність та швидкострільність.',
                en: 'A modern rifle with integrated optical sights and a unique fast reload system, providing excellent maneuverability and rapid fire capability.',
                de: 'Ein modernes Gewehr mit integrierten optischen Visieren und einem einzigartigen Schnellladesystem, das hervorragende Beweglichkeit und schnelles Feuern ermöglicht.',
                pl: 'Nowoczesny karabin z zintegrowanymi celownikami optycznymi i unikalnym systemem szybkiego przeładowania, zapewniający doskonałą manewrowość i szybkostrzelność.',
            },
        },

        assaultrifle_mk2: {
            name: {
                ru: 'Штурмовая винтовка Mk II',
                ua: 'Штурмова гвинтівка Mk II',
                en: 'Assault Rifle Mk II',
                de: 'Sturmgewehr Mk II',
                pl: 'Karabin szturmowy Mk II',
            },
            desc: {
                ru: 'Улучшенная версия штурмовой винтовки, обычно используется для боевых действий на средней дистанции.',
                ua: 'Покращена версія штурмової гвинтівки, зазвичай використовується для бойових дій на середній відстані.',
                en: 'An upgraded version of the assault rifle, typically used for combat at medium range.',
                de: 'Eine verbesserte Version des Sturmgewehrs, typischerweise für den Kampf auf mittlere Entfernung verwendet.',
                pl: 'Ulepszona wersja karabinu szturmowego, zwykle używana do walki na średnim dystansie.',
            },
        },
        bullpuprifle: {
            name: {
                ru: 'Винтовка Bullpup',
                ua: 'Гвинтівка Bullpup',
                en: 'Bullpup Rifle',
                de: 'Bullpup-Gewehr',
                pl: 'Karabin bullpup',
            },
            desc: {
                ru: 'Компактная винтовка с bullpup-схемой, обычно используется для боевых действий на средней дистанции.',
                ua: 'Компактна гвинтівка з bullpup-схемою, зазвичай використовується для бойових дій на середній відстані.',
                en: 'A compact rifle with a bullpup layout, typically used for combat at medium range.',
                de: 'Ein kompaktes Gewehr mit Bullpup-Layout, typischerweise für den Kampf auf mittlere Entfernung verwendet.',
                pl: 'Kompaktowy karabin z układem bullpup, zwykle używany do walki na średnim dystansie.',
            },
        },
        compactrifle: {
            name: {
                ru: 'Компактная винтовка',
                ua: 'Компактна гвинтівка',
                en: 'Compact Rifle',
                de: 'Kompaktgewehr',
                pl: 'Karabin kompaktowy',
            },
            desc: {
                ru: 'Маленькая, но мощная винтовка, обычно используется для боевых действий на средней дистанции.',
                ua: 'Маленька, але потужна гвинтівка, зазвичай використовується для бойових дій на середній відстані.',
                en: 'A small but powerful rifle, typically used for combat at medium range.',
                de: 'Ein kleines, aber leistungsstarkes Gewehr, typischerweise für den Kampf auf mittlere Entfernung verwendet.',
                pl: 'Mały, ale potężny karabin, zwykle używany do walki na średnim dystansie.',
            },
        },
        militaryrifle: {
            name: {
                ru: 'Военная винтовка',
                ua: 'Військова гвинтівка',
                en: 'Military Rifle',
                de: 'Militärgewehr',
                pl: 'Karabin wojskowy',
            },
            desc: {
                ru: 'Это оружие, которое используется военными. Военная винтовка обладает высокой точностью и мощностью.',
                ua: 'Ця зброя, яку використовують військові. Військова гвинтівка має високу точність та потужність.',
                en: 'This is a weapon that is used by the military. The military rifle has high accuracy and power.',
                de: 'Dies ist eine Waffe, die vom Militär verwendet wird. Das Militärgewehr hat eine hohe Genauigkeit und Leistung.',
                pl: 'To jest broń używana przez wojsko. Karabin wojskowy ma wysoką celność i moc.',
            },
        },
        heavyrifle: {
            name: {
                ru: 'Тяжелая винтовка',
                ua: 'Важка гвинтівка',
                en: 'Heavy Rifle',
                de: 'Schweres Gewehr',
                pl: 'Ciężki karabin',
            },
            desc: {
                ru: 'Это оружие для тех, кто хочет уничтожить все на своем пути. Тяжелая винтовка обладает огромной мощностью.',
                ua: 'Ця зброя для тих, хто хоче знищити все на своєму шляху. Важка гвинтівка має величезну потужність.',
                en: 'This is a weapon for those who want to obliterate everything in their path. The heavy rifle has immense power.',
                de: 'Dies ist eine Waffe für diejenigen, die alles auf ihrem Weg auslöschen wollen. Das schwere Gewehr hat eine immense Leistung.',
                pl: 'To jest broń dla tych, którzy chcą zniszczyć wszystko na swojej drodze. Ciężki karabin ma ogromną moc.',
            },
        },
        tacticalrifle: {
            name: {
                ru: 'Тактическая винтовка',
                ua: 'Тактична гвинтівка',
                en: 'Tactical Rifle',
                de: 'Taktisches Gewehr',
                pl: 'Karabin taktyczny',
            },
            desc: {
                ru: 'Это оружие для тех, кто ценит стратегию и тактику. Тактическая винтовка обладает высокой точностью и управляемостью.',
                ua: 'Ця зброя для тих, хто цінує стратегію та тактику. Тактична гвинтівка має високу точність та керованість.',
                en: 'This is a weapon for those who value strategy and tactics. The tactical rifle has high accuracy and control.',
                de: 'Dies ist eine Waffe für diejenigen, die Strategie und Taktik schätzen. Das taktische Gewehr hat eine hohe Genauigkeit und Kontrolle.',
                pl: 'To jest broń dla tych, którzy cenią strategię i taktykę. Karabin taktyczny ma wysoką celność i kontrolę.',
            },
        },

        // Light Machine Guns

        mg: {
            name: {
                ru: 'Пулемет',
                ua: 'Кулемет',
                en: 'MG',
                de: 'MG',
                pl: 'MG',
            },
            desc: {
                ru: 'Оружие с высокой скоростью стрельбы, обычно используется для подавления огня противника на больших дистанциях.',
                ua: 'Зброя з високою швидкістю стрільби, зазвичай використовується для придушення вогню противника на великих відстанях.',
                en: 'A weapon with a high rate of fire, typically used for suppressing enemy fire at long ranges.',
                de: 'Eine Waffe mit hoher Feuerrate, die typischerweise zum Unterdrücken des Feindfeuers auf lange Distanzen verwendet wird.',
                pl: 'Broń o wysokiej szybkości ognia, zwykle używana do tłumienia ognia wroga na dużych dystansach.',
            },
        },
        combatmg: {
            name: {
                ru: 'Боевой пулемет',
                ua: 'Бойовий кулемет',
                en: 'Combat MG',
                de: 'Kampf-MG',
                pl: 'MG bojowy',
            },
            desc: {
                ru: 'Боевой пулемет обладает улучшенной точностью и мощностью, обычно используется для подавления огня противника на больших дистанциях.',
                ua: 'Бойовий кулемет має покращену точність та потужність, зазвичай використовується для придушення вогню противника на великих відстанях.',
                en: 'The Combat MG has improved accuracy and power, typically used for suppressing enemy fire at long ranges.',
                de: 'Das Kampf-MG hat eine verbesserte Genauigkeit und Leistung, typischerweise zum Unterdrücken des Feindfeuers auf lange Distanzen verwendet.',
                pl: 'MG bojowy ma poprawioną celność i moc, zwykle używany do tłumienia ognia wroga na dużych dystansach.',
            },
        },
        combatmg_mk2: {
            name: {
                ru: 'Боевой пулемет Mk II',
                ua: 'Бойовий кулемет Mk II',
                en: 'Combat MG Mk II',
                de: 'Kampf-MG Mk II',
                pl: 'MG bojowy Mk II',
            },
            desc: {
                ru: 'Улучшенная версия боевого пулемета, обычно используется для подавления огня противника на больших дистанциях.',
                ua: 'Покращена версія бойового кулемета, зазвичай використовується для придушення вогню противника на великих відстанях.',
                en: 'An upgraded version of the Combat MG, typically used for suppressing enemy fire at long ranges.',
                de: 'Eine verbesserte Version des Kampf-MGs, typischerweise zum Unterdrücken des Feindfeuers auf lange Distanzen verwendet.',
                pl: 'Ulepszona wersja MG bojowego, zwykle używany do tłumienia ognia wroga na dużych dystansach.',
            },
        },
        gusenberg: {
            name: {
                ru: 'Пулемет Гусенберга',
                ua: 'Кулемет Гусенберга',
                en: 'Gusenberg Sweeper',
                de: 'Gusenberg-Sweeper',
                pl: 'Gusenberg Sweeper',
            },
            desc: {
                ru: 'Это оружие в стиле 1920-х годов, обычно используется для боевых действий на средней дистанции.',
                ua: 'Ця зброя в стилі 1920-х років, зазвичай використовується для бойових дій на середній відстані.',
                en: 'A weapon in the style of the 1920s, typically used for combat at medium range.',
                de: 'Eine Waffe im Stil der 1920er Jahre, typischerweise für den Kampf auf mittlere Entfernung verwendet.',
                pl: 'Broń w stylu lat 20-tych, zwykle używana do walki na średnim dystansie.',
            },
        },

        // Снайперки ебаные

        sniperrifle: {
            name: {
                ru: 'Снайперская винтовка',
                ua: 'Снайперська гвинтівка',
                en: 'Sniper Rifle',
                de: 'Scharfschützengewehr',
                pl: 'Karabin snajperski',
            },
            desc: {
                ru: 'Это оружие для тех, кто ценит точность и контроль. Снайперская винтовка обычно используется для точной стрельбы на больших дистанциях.',
                ua: 'Ця зброя для тих, хто цінує точність та контроль. Снайперська гвинтівка зазвичай використовується для точної стрільби на великих відстанях.',
                en: 'This is a weapon for those who value precision and control. The sniper rifle is typically used for accurate shooting at long ranges.',
                de: 'Dies ist eine Waffe für diejenigen, die Präzision und Kontrolle schätzen. Das Scharfschützengewehr wird typischerweise für genaues Schießen auf lange Distanzen verwendet.',
                pl: 'To jest broń dla tych, którzy cenią precyzję i kontrolę. Karabin snajperski jest zwykle używany do celnej strzelaniny na dużych dystansach.',
            },
        },

        precisionrifle: {
            name: {
                ru: 'Прецизионная винтовка',
                ua: 'Прецизійна гвинтівка',
                en: 'Precision Hunter',
                de: 'Präzisionsjäger',
                pl: 'Myśliwski Karabin Precyzyjny',
            },
            desc: {
                ru: 'Эта винтовка предназначена для тех, кто требует абсолютной точности. Прецизионная винтовка обеспечивает превосходную точность и мощь на дальних дистанциях, отлично подходит для охоты.',
                ua: 'Ця гвинтівка призначена для тих, хто потребує абсолютної точності. Прецизійна гвинтівка забезпечує чудову точність та потужність на великих відстанях, відмінно підходить для полювання.',
                en: 'This rifle is designed for those who demand absolute precision. The Precision Hunter offers superb accuracy and power at long ranges, making it perfect for hunting.',
                de: 'Dieses Gewehr ist für diejenigen gedacht, die absolute Präzision verlangen. Das Präzisionsjäger-Gewehr bietet hervorragende Genauigkeit und Durchschlagskraft auf große Entfernungen und ist ideal für die Jagd.',
                pl: 'Ten karabin został zaprojektowany dla tych, którzy wymagają absolutnej precyzji. Myśliwski Karabin Precyzyjny oferuje doskonałą dokładność i moc na dużych odległościach, co czyni go idealnym do polowań.',
            },
        },
        
        //
        snowball: {
            name: {
                ru: 'Снежок',
                ua: 'Сніжок',
                en: 'Snowball',
                de: 'Schneeball',
                pl: 'Słomik',
            },
            desc: {
                ua: 'Можна знести комусь їбало',
                ru: 'Можно снести кому то ебало',
                en: "Can smash someone's face",
                de: 'Kann jemandem das Gesicht einschlagen',
                pl: 'Można rozbić komuś twarz',
            },
        },
        stungun: {
            name: {
                ru: 'Электрошокер',
                ua: 'Електрошокер',
                en: 'Stun Gun',
                de: 'Elektroschocker',
                pl: 'Paralizator',
            },
            desc: {
                ru: 'Высокотехнологичное нелетальное оружие, предназначенное для временного обездвиживания цели с помощью электрического разряда. Обладает встроенной системой точного наведения и усовершенствованным механизмом для многократного использования.',
                ua: 'Високотехнологічна нелетальна зброя, призначена для тимчасового іммобілізації цілі за допомогою електричного розряду. Має вбудовану систему точного наведення та вдосконалений механізм для багаторазового використання.',
                en: 'A high-tech non-lethal weapon designed to temporarily immobilize a target with an electrical discharge. Features an integrated precision targeting system and an advanced mechanism for multiple uses.',
                de: 'Eine hochtechnologische nicht-tödliche Waffe, entwickelt, um ein Ziel vorübergehend mit einer elektrischen Entladung zu immobilisieren. Verfügt über ein integriertes Präzisionszielsystem und einen fortschrittlichen Mechanismus für mehrfache Verwendungen.',
                pl: 'Wysokotechnologiczna broń nieśmiercionośna, zaprojektowana do tymczasowego unieruchomienia celu za pomocą wyładowania elektrycznego. Posiada wbudowany system precyzyjnego celowania i zaawansowany mechanizm umożliwiający wielokrotne użycie.',
            },
        },
    },
};
