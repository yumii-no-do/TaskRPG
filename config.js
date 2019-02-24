import {ToastAndroid} from 'react-native';
export default {

    quests: {
        coefficients: {
            plusHPReady: Math.floor(Math.random() * 50),
            damage: Math.floor(Math.random() * 100),
            XPtoWin: Math.floor(Math.random() * 50),
        },
        getMonsterImage: (level) => {
            const images = [
                require('./assets/monstersImage/1.gif'),
                require('./assets/monstersImage/2.gif'),
                require('./assets/monstersImage/3.gif'),
                require('./assets/monstersImage/4.gif'),
                require('./assets/monstersImage/5.gif'),
                require('./assets/monstersImage/5.gif'),
                require('./assets/monstersImage/7.gif'),
                require('./assets/monstersImage/8.gif'),
                require('./assets/monstersImage/9.gif'),
                require('./assets/monstersImage/10.gif'),
                require('./assets/monstersImage/11.gif'),
            ];

            switch (level) {

                // case 1: {
                //     return images[Math.floor(Math.random() * 5)]
                // }
                // case 2: {
                //     return images[Math.floor(Math.random() * 6)]
                // }
                // case 3: {
                //     return images[Math.floor(Math.random() * 7)]
                // }
                // case 4: {
                //     return images[Math.floor(Math.random() * 8)]
                // }
                // case 5: {
                //     return images[Math.floor(Math.random() * images.length)]
                // }
                // case 6: {
                //     return images[Math.floor(Math.random() * images.length)]
                // }
                default:
                    return images[Math.floor(Math.random() * images.length)];
            }
        },
        getBossImage: (level) => {

            const images = [
                require('./assets/bossImage/1.gif'),
                require('./assets/bossImage/2.gif'),
                require('./assets/bossImage/3.gif'),
                require('./assets/bossImage/4.gif'),
                require('./assets/bossImage/5.gif'),
                require('./assets/bossImage/5.gif'),
                require('./assets/bossImage/7.gif'),
                require('./assets/bossImage/8.gif'),
                require('./assets/bossImage/9.gif'),
            ];

            switch (level) {

                // case 1: {
                //     return images[Math.floor(Math.random() * 5)]
                // }
                default:
                    return images[Math.floor(Math.random() * images.length)];
            }
        },

    },
    character: {
        getLocationsImage: (level) => {

            const images = [
                require('./assets/locations/1.png'),
            ];

            switch (level) {

                case 1: {
                    return images[0]
                }
                default:
                    return images[0];
            }
        },
        getCharacterImage: () => {

            const images = [
                require('./assets/character/1.gif'),
                require('./assets/character/2.gif'),
                require('./assets/character/3.gif'),
                require('./assets/character/4.gif'),
                require('./assets/character/5.gif'),
                require('./assets/character/6.gif')
            ];
            if (arguments > 0) {
                switch (arguments[0]) {

                    case 1: {
                        return images[0]
                    }
                    default:
                        return images[0];
                }
            } else {
                return images;
            }

        },
        getLevel: (XP) => {
            const n = 10;
            if (XP >= 0 && XP < 200+n) {
                return 1
            }
            if (XP >= 200+n && XP < 450+n) {
                return 2
            }
            if (XP >= 450+n && XP < 600+n) {
                return 3
            }
            if (XP >= 600+n && XP < 800+n) {
                return 4
            }
            if (XP >= 800+n && XP < 1050+n) {
                return 5
            }
            if (XP >= 1050+n) {
                return 6
            }
        },
        getToNextLevel: (level) => {
            switch (level) {
                case 1:
                    return 200;
                case 2:
                    return 450;
                case 3:
                    return 600;
                case 4:
                    return 800;
                case 5:
                    return 1050;
                case 6:
                    return 100000;
                default:
                    return 200
            }
        }
    }

}