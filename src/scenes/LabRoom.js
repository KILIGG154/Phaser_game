import { Scene } from 'phaser';

export class LabRoom extends Scene {
    constructor() {
        super('LabRoom');
    }

    preload() {
        this.load.image('lab_bg', 'assets/lab.png');
        // Bạn có thể load thêm các asset khác ở đây nếu cần
    }

    create() {
        // Hiển thị background lab
        this.add.image(512, 384, 'lab_bg').setDisplaySize(1024, 768);
        // TODO: Thêm các thành phần khác trong phòng lab nếu cần

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

        // Nút "To the Lab" với border radius và đổ bóng
        const btnX = 200;
        const btnY = 350;
        const btnWidth = 150;
        const btnHeight = 70;
        const borderRadius = 16;

        // Vẽ nền nút với border radius
        const btnBg = this.add.graphics();
        btnBg.fillStyle(0x255a8c, 1);
        btnBg.lineStyle(4, 0xc0c0c0, 1); // viền bạc
        btnBg.fillRoundedRect(btnX, btnY, btnWidth, btnHeight, borderRadius);
        btnBg.strokeRoundedRect(btnX, btnY, btnWidth, btnHeight, borderRadius);
        btnBg.setDepth(20);
        btnBg.setAlpha(0.95);

        // Thêm text lên trên
        const toLabBtn = this.add.text(btnX + btnWidth / 2, btnY + btnHeight / 2, 'To the Lab ▶', {
            fontFamily: 'Arial Black',
            fontSize: 20,
            color: '#ffe600',
            align: 'center',
            shadow: {
                offsetX: 0,
                offsetY: 3,
                color: '#c0c0c0',
                blur: 8,
                stroke: true,
                fill: true
            }
        })
        .setOrigin(0.5)
        .setDepth(21)
        .setInteractive({ useHandCursor: true })
        .on('pointerover', function () {
            btnBg.clear();
            btnBg.fillStyle(0x174a7c, 1);
            btnBg.lineStyle(4, 0xc0c0c0, 1);
            btnBg.fillRoundedRect(btnX, btnY, btnWidth, btnHeight, borderRadius);
            btnBg.strokeRoundedRect(btnX, btnY, btnWidth, btnHeight, borderRadius);
            toLabBtn.setColor('#fff');
        })
        .on('pointerout', function () {
            btnBg.clear();
            btnBg.fillStyle(0x255a8c, 1);
            btnBg.lineStyle(4, 0xc0c0c0, 1);
            btnBg.fillRoundedRect(btnX, btnY, btnWidth, btnHeight, borderRadius);
            btnBg.strokeRoundedRect(btnX, btnY, btnWidth, btnHeight, borderRadius);
            toLabBtn.setColor('#ffe600');
        })
        .on('pointerdown', () => {
            // TODO: Chuyển scene hoặc thực hiện hành động mong muốn
            console.log('LabEntrance');
            this.scene.start('LabEntrance');
        });
    }
}
