import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    preload ()
    {
        // Đảm bảo đường dẫn asset đúng với cấu trúc thư mục
        this.load.image('bg', 'assets/city.png');
        this.load.image('bubbles', 'assets/panda.png');
        // Nếu có nút là ảnh thì load thêm, nếu không sẽ vẽ bằng code
    }

    create ()
    {
        // Nền
        this.add.image(512, 384, 'bg').setScale(1.65);

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

        // Hộp thoại chào mừng và text nằm chung container, không đổi vị trí
        const welcomeContainer = this.add.container(650, 200);


        // Vẽ hộp thoại bo góc bằng graphics để có border radius 8px, viền xanh nước biển
        const boxGraphics = this.add.graphics();
        boxGraphics.lineStyle(4, 0x3399ff, 1); // xanh nước biển
        boxGraphics.fillStyle(0xffffff, 0.95);
        boxGraphics.strokeRoundedRect(-210, -80, 420, 160, 8);
        boxGraphics.fillRoundedRect(-210, -80, 420, 160, 8);
        boxGraphics.setDepth(1);
        welcomeContainer.add(boxGraphics);
        // Text chào mừng
        const welcomeText = this.add.text(0, 0, 
            'Chào mừng đến với Phòng thí nghiệm ảo!\nNhấp vào “Bắt đầu” để vào phòng thí nghiệm và\nkhám phá thế giới hóa học cùng với Tiến sĩ Bubbles.',
            { fontFamily: 'Arial', fontSize: 22, color: '#222', align: 'left', wordWrap: { width: 390 } }
        ).setOrigin(0.5, 0.5);
        welcomeContainer.add(welcomeText);

        // Nút BẮT ĐẦU với border radius 8px bằng graphics
        const btnX = 650 + 80;
        const btnY = 260 + 20;
        const btnGraphics = this.add.graphics();
        btnGraphics.lineStyle(4, 0xffff00, 1);
        btnGraphics.fillStyle(0x0099ff, 1);
        btnGraphics.strokeRoundedRect(btnX - 90, btnY - 28, 180, 56, 8);
        btnGraphics.fillRoundedRect(btnX - 90, btnY - 28, 180, 56, 8);
        btnGraphics.setDepth(11);
        // Tạo vùng tương tác cho nút
        const btnZone = this.add.zone(btnX, btnY, 180, 56).setOrigin(0.5).setInteractive({ useHandCursor: true }).setDepth(12);
        this.add.text(btnX, btnY, 'BẮT ĐẦU', { fontFamily: 'Arial Black', fontSize: 32, color: '#fff' })
            .setOrigin(0.5).setDepth(13);
        btnZone.on('pointerdown', () => {
            this.scene.start('LabRoom');
        });

        // Nhân vật Bubbles
        this.add.image(850 - 550, 260 + 200, 'bubbles').setScale(8.8).setDepth(2);

        // === NAVBAR ===
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
        this.add.text(800, 22 - 17, '\uf013', { fontFamily: 'FontAwesome', fontSize: 22, color: '#bcd2e8', backgroundColor: '#255a8c', padding: { left: 12, right: 12, top: 8, bottom: 8 } })
            .setOrigin(0, 0).setDepth(11).setAlpha(0.7).setScale(1.1); // fa-cog
        this.add.text(860 + 5, 22 - 17, '\uf030', { fontFamily: 'FontAwesome', fontSize: 22, color: '#bcd2e8', backgroundColor: '#255a8c', padding: { left: 12, right: 12, top: 8, bottom: 8 } })
            .setOrigin(0, 0).setDepth(11).setAlpha(0.7).setScale(1.1); // fa-camera
        this.add.text(910 + 25, 22 - 17 , '\uf059', { fontFamily: 'FontAwesome', fontSize: 22, color: '#bcd2e8', backgroundColor: '#255a8c', padding: { left: 12, right: 12, top: 8, bottom: 8 } })
            .setOrigin(0, 0).setDepth(11).setAlpha(0.7).setScale(1.1); // fa-question-circle

        // (Tùy chọn) Thêm các icon, điểm số, v.v. ở góc trên
        // this.add.image(...);
        // this.add.text(...);
    }
}
