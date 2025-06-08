import { Scene } from 'phaser';

export class Room extends Scene {
    constructor() {
        super('Room');
    }

    preload() {
        this.load.image('room_bg', 'assets/room.png');
        // Hiển thị 2 ảnh H2O và NaCl
        this.load.image('h2o', 'assets/water.png');
        this.load.image('nacl', 'assets/Nacl.png');
    }

    create() {
        // Hiển thị background room.png căn giữa canvas 1024x768
        this.add.image(512, 384, 'room_bg').setDisplaySize(1024, 768);

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

        // Hiển thị 2 ảnh H2O và NaCl
        const h2oImg = this.add.image(400, 200, 'h2o').setScale(0.3).setDepth(12).setInteractive({ useHandCursor: true });
        const naclImg = this.add.image(600, 200, 'nacl').setScale(0.5).setDepth(12).setInteractive({ useHandCursor: true });

        // Hàm tạo popup video
        function showVideoPopup(videoUrl) {
            // Tạo nền mờ
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.left = '0';
            overlay.style.top = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'rgba(0,0,0,0.6)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = '9999';

            // Tạo thẻ video hoặc iframe
            const iframe = document.createElement('iframe');
            // Thêm ?autoplay=1 vào cuối URL để tự động phát
            iframe.src = videoUrl.includes('?') ? videoUrl + '&autoplay=1' : videoUrl + '?autoplay=1';
            iframe.width = '720';
            iframe.height = '405';
            iframe.allow = 'autoplay; encrypted-media';
            iframe.allowFullscreen = true;
            iframe.style.border = 'none';
            overlay.appendChild(iframe);

            // Đóng popup khi click ra ngoài
            overlay.addEventListener('mousedown', function(e) {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                }
            });

            document.body.appendChild(overlay);
        }

        h2oImg.on('pointerdown', () => {
            showVideoPopup('https://www.youtube.com/embed/a86kCtxN6Rg');
        });
        naclImg.on('pointerdown', () => {
            showVideoPopup('https://www.youtube.com/embed/XCWBKxLDP8w');
        });
    }
}
