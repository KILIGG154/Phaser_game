import { Scene } from 'phaser';

export class LabEntrance extends Scene {
    constructor() {
        super('LabEntrance');
    }

    preload() {
        this.load.image('bgg', 'assets/enter.png'); // thử thêm dấu / ở đầu
    }

    create() {
        // Căn giữa ảnh 898x598 trên canvas 1024x768
        const x = (1024 - 898) / 2 + 898 / 2; // = 512
        const y = (768 - 598) / 2 + 598 / 2;  // = 384
        this.add.image(x, y, 'bgg').setDisplaySize(1024, 768);

         // Logo BASF góc trên trái (text, margin left -20, margin top -15)
        this.add.text(80 - 40, 18 - 15, 'BASF', {
            fontFamily: 'Arial Black',
            fontSize: 32,
            color: '#fff',
            fontStyle: 'bold'
        }).setOrigin(0, 0).setDepth(11);
        // Slogan nhỏ bên dưới (margin left -20, margin top -15)
        this.add.text(100 - 65, 46 - 10, 'We create chemistry', {
            fontFamily: 'Arial',
            fontSize: 14,
            color: '#fff'
        }).setOrigin(0, 0).setDepth(11);

        // Thanh navbar nền xanh đậm
        const navBar = this.add.rectangle(512, 28, 1024, 56, 0x174a7c, 0.98).setOrigin(0.5);
        navBar.setDepth(10);
        // Logo BASF
        this.add.text(80, 28, 'basf').setOrigin(0, 0.5).setScale(0.32).setDepth(11);
        // // Slogan
        // this.add.text(80, 52, 'We create chemistry', { fontFamily: 'Arial', fontSize: 14, color: '#fff' }).setOrigin(0, 0).setDepth(11);
        // Icon ngôi sao và điểm số
        this.add.text(250, 20 - 10, '\uf005', { fontFamily: 'FontAwesome', fontSize: 28, color: '#ffe600' }).setOrigin(0, 0).setDepth(11); // fa-star
        this.add.text(285, 26 -13, '0', { fontFamily: 'Arial Black', fontSize: 24, color: '#fff' }).setOrigin(0, 0).setDepth(11);
        // Nút Login (icon user)
        this.add.text(370, 22 - 13, '\uf007  Đăng nhập', { fontFamily: 'FontAwesome, Arial', fontSize: 18, color: '#bcd2e8', backgroundColor: '#255a8c', padding: { left: 16, right: 16, top: 6, bottom: 6 } })
            .setOrigin(0, 0).setDepth(11).setAlpha(0.7).setScale(1.15);
        // Nút chọn ngôn ngữ (icon globe)
        this.add.text(540, 22 - 13, '\uf0ac  Tiếng Anh', { fontFamily: 'FontAwesome, Arial', fontSize: 18, color: '#bcd2e8', backgroundColor: '#255a8c', padding: { left: 16, right: 16, top: 6, bottom: 6 } })
            .setOrigin(0, 0).setDepth(11).setAlpha(0.7).setScale(1.15);
        // Các icon tròn bên phải (cài đặt, camera, trợ giúp)
        this.add.text(800, 22 - 17, '\uf70c', { fontFamily: 'FontAwesome', fontSize: 20, color: '#bcd2e8', backgroundColor: '#255a8c', padding: { left: 12, right: 12, top: 8, bottom: 8 } })
            .setOrigin(0, 0).setDepth(11).setAlpha(0.7).setScale(1.1); // fa-cog
        this.add.text(860 + 5, 22 - 17, '\uf030', { fontFamily: 'FontAwesome', fontSize: 22, color: '#bcd2e8', backgroundColor: '#255a8c', padding: { left: 12, right: 12, top: 8, bottom: 8 } })
            .setOrigin(0, 0).setDepth(11).setAlpha(0.7).setScale(1.1); // fa-camera
        this.add.text(910 + 25, 22 - 17 , '\uf059', { fontFamily: 'FontAwesome', fontSize: 22, color: '#bcd2e8', backgroundColor: '#255a8c', padding: { left: 12, right: 12, top: 8, bottom: 8 } })
            .setOrigin(0, 0).setDepth(11).setAlpha(0.7).setScale(1.1); // fa-question-circle
        // Icon mũi tên trái màu xanh lá
        let leftClicked = false;
        let rightClicked = false;
        let upArrowBg, upArrowText;

        const leftArrow = this.add.text(300, 300, '\uf060', {
            fontFamily: 'FontAwesome',
            fontSize: 48,
            color: '#00c853', // xanh lá
            backgroundColor: '#fff',
            padding: { left: 16, right: 16, top: 8, bottom: 8 }
        }).setOrigin(0.5).setDepth(12).setInteractive({ useHandCursor: true });

        leftArrow.on('pointerdown', () => {
            leftArrow.setText('\uf00c'); // đổi sang icon dấu tích
            leftClicked = true;
            showUpArrowIfReady();
        });

        // Icon mũi tên phải màu xanh lá
        const rightArrow = this.add.text(770, 450, '\uf061', {
            fontFamily: 'FontAwesome',
            fontSize: 48,
            color: '#00c853', // xanh lá
            backgroundColor: '#fff',
            padding: { left: 16, right: 16, top: 8, bottom: 8 }
        }).setOrigin(0.5).setDepth(12).setInteractive({ useHandCursor: true });

        rightArrow.on('pointerdown', () => {
            rightArrow.setText('\uf00c'); // đổi sang icon dấu tích
            rightClicked = true;
            showUpArrowIfReady();
        });

        // Hàm kiểm tra điều kiện và hiển thị mũi tên lên
        const self = this;
        function showUpArrowIfReady() {
            if (leftClicked && rightClicked && !upArrowBg) {
                upArrowBg = self.add.graphics();
                const upX = 500;
                const upY = 600;
                const upWidth = 90;
                const upHeight = 90;
                const upRadius = 8;
                // Đổ bóng xám
                upArrowBg.fillStyle(0x888888, 0.25); // bóng xám nhạt
                upArrowBg.fillRoundedRect(upX + 6, upY + 6, upWidth, upHeight, upRadius);
                // Nền trắng
                upArrowBg.fillStyle(0xffffff, 1);
                upArrowBg.fillRoundedRect(upX, upY, upWidth, upHeight, upRadius);
                upArrowBg.setDepth(11);

                upArrowText = self.add.text(upX + upWidth / 2, upY + upHeight / 2, '\uf062', {
                    fontFamily: 'FontAwesome',
                    fontSize: 90,
                    color: '#111', // đen đậm
                    align: 'center',
                })
                .setOrigin(0.5)
                .setDepth(12)
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', function () {
                    self.scene.start('Room');
                });
            }
        }
    
        }
}