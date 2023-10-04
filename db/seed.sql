\c craftopia_database;

INSERT INTO tools (
    name,
    description,
    price,
    stock,
    condition,
    category,
    created_by,
    user_id,
    thumbnail
)
VALUES 
-- Juan
('Spray Paint Set', 'A set of various colored spray paints.', 59.99, 10, 'good', 'Graffiti', 'felizj171', 1, 'https://m.media-amazon.com/images/I/51d5u5bP97L._AC_UF894,1000_QL80_.jpg'),
('Sculpting Tool Set', 'High-quality tools for sculpting.', 29.99, 5, 'neutral', 'Sculpting', 'felizj171', 1, 'https://ae01.alicdn.com/kf/Sf157bd5fc72340c48e294018ca0a6f9f9/22PCS-Pottery-Clay-Sculpting-Tools-Set-Kit-Smoothing-Wax-Carving-Pottery-Ceramic-Tools-Polymer-Shapers-Modeling.jpg'),

('Clay', '25 lbs of sculpting clay.', 40.00, 4, 'good', 'Sculpting', 'felizj171', 1, 'https://images.ctfassets.net/f1fikihmjtrp/CJFeUpMpOQkenXgTZy2S2/992cb213f03003cd28cbbd71f96bfbe8/30543-3550-1-4ww.jpg'),
('Stencil Kit', 'Stencil set for graffiti art.', 20.00, 8, 'neutral', 'Graffiti', 'felizj171', 1, 'https://m.media-amazon.com/images/I/91NOgyXyLRL.jpg'),
('Stone Block', 'Medium-sized stone for sculpting.', 70.00, 2, 'good', 'Sculpting', 'felizj171', 1, 'https://images.squarespace-cdn.com/content/v1/58fd148be6f2e1ad3fd43b08/1505013903161-X6X9SUXQ9YEK89YQMSSP/IMG_1465.jpg?format=1000w'),
-- Michel
('Designer Dress Form', 'Adjustable dress form for fashion design.', 150.00, 3, 'good', 'Fashion Design', 'Michel', 2,'https://mannequinmall.com/cdn/shop/products/best-seller-female-professional-dress-form-with-collapsible-shoulders-mm-pfdcs_10b3a4f2-8611-47c3-8e77-97b080f3ae36_1600x.jpg?v=1673944742'),
('Fabric Shears', 'High-quality shears for cutting fabrics.', 25.00, 7, 'neutral', 'Fashion Design', 'Michel', 2, 'https://images.thdstatic.com/productImages/b9af6c04-1d53-4991-9457-d8d4c3c6d675/svn/wiss-scissors-w22n-64_600.jpg'),
('Mannequin', 'Display mannequin for fashion design.', 80.00, 5, 'good', 'Fashion Design', 'Michel', 2, 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0uiskkCZ_m2fFHp-2Y-01WrV46AaG1wJSlVa7UpBCVLmQvu19lzwFn-BSYempojvYbsfKu2eruyUr6fBUes-f5p6C2MZpe9Bdp1DhqPjYLLHNQhpi7RbV_Q&usqp=CAE'),
('Sewing Machine', 'Industrial sewing machine.', 550.00, 1, 'neutral', 'Fashion Design', 'Michel', 2, 'https://m.media-amazon.com/images/I/419wLgtNuYL.jpg'),
('Fabric Bundle', 'Assorted fabrics for fashion design.', 40.00, 10, 'good', 'Fashion Design', 'Michel', 2, 'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/7CD0C1660E18492E963F3E7A253917A6/10509767_1.jpg?fit=inside|1280:1280'),
-- Evan
('Camera Rig', 'Stabilizing rig for cameras.', 300.00, 2, 'good', 'Photography', 'Evan', 3, 'https://shop.redrockmicro.com/wp-content/uploads/2016/08/field-cinema-fully-loaded-iso-1024x1024.png'),
('Lighting Kit', 'Comprehensive lighting kit for photography.', 250.00, 3, 'neutral', 'Filmmaking', 'Evan', 3, 'https://www.cowboystudio.com/v/vspfiles/photos/EZSoftboxkit-2.jpg?v-cache=1392672168'),
('Graphic Tablet', 'Digital graphic tablet for artists.', 150.00, 5, 'good', 'Digital Artistry', 'Evan', 3, 'https://m.media-amazon.com/images/I/715TTPTajUL.jpg'),
('Sketchbook', 'High-quality sketchbook for artists.', 15.00, 20, 'neutral', 'Drawing', 'Evan', 3, 'https://www.joann.com/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw875082c0/images/hi-res/82/8292294.jpg?sw=556&sh=680&sm=fit'),
('Digital Camera', 'High-resolution digital camera.', 700.00, 1, 'good', 'Filmmaking', 'Evan', 3, 'https://www.bhphotovideo.com/images/images2500x2500/sony_sony_rx10iv_digital_camera_1361560.jpg'),
-- Sharukh
('Easel', 'Adjustable easel for painting.', 75.00, 5, 'neutral', 'Painting', 'sharukh', 4, 'https://m.media-amazon.com/images/I/61GDYsGtFgL.jpg'),
('Acrylic Paint Set', 'Set of 24 acrylic paints.', 35.00, 10, 'good', 'Painting', 'sharukh', 4, 'https://bjs.scene7.com/is/image/bjs/172772?$bjs-Zoom$'),
('Screen Printing Kit', 'All-in-one screen printing kit.', 100.00, 3, 'neutral', 'Printmaking', 'sharukh', 4, 'https://s7.orientaltrading.com/is/image/OrientalTrading/13730110?$PDP_VIEWER_IMAGE$'),
('Canvas', '16x20 stretched canvas.', 18.00, 15, 'good', 'Painting', 'sharukh', 4, 'https://i.pinimg.com/originals/33/f1/7a/33f17a74cdd315759106d461b1c0acd3.jpg'),
('Linocut Tools', 'Set of tools for linocut printmaking.', 22.00, 7, 'neutral', 'Printmaking', 'sharukh', 4, 'https://images.squarespace-cdn.com/content/v1/5565fa7ce4b0f52509427764/94d7bcad-12f7-4d71-8232-28bceb04ed75/Speedball+Linocutter+Carving+Tools');



INSERT INTO tool_media (
    file_name,
    file_size,  -- You can add appropriate file sizes for each file
    file_type,
    file_url,
    tool_id  -- Assuming tool IDs start from 1 and increment sequentially for every new record
)
VALUES 
('figure_1', 300, 'image/jpg', 'https://m.media-amazon.com/images/I/51d5u5bP97L._AC_UF894,1000_QL80_.jpg', 1),
('figure_1', 300, 'image/jpg', 'https://ae01.alicdn.com/kf/Sf157bd5fc72340c48e294018ca0a6f9f9/22PCS-Pottery-Clay-Sculpting-Tools-Set-Kit-Smoothing-Wax-Carving-Pottery-Ceramic-Tools-Polymer-Shapers-Modeling.jpg', 2),
('figure_1', 300, 'image/WebP', 'https://images.ctfassets.net/f1fikihmjtrp/CJFeUpMpOQkenXgTZy2S2/992cb213f03003cd28cbbd71f96bfbe8/30543-3550-1-4ww.jpg', 3),
('figure_1', 300, 'image/jpg', 'https://m.media-amazon.com/images/I/91NOgyXyLRL.jpg', 4),
('figure_1', 300, 'image/jpg', 'https://images.squarespace-cdn.com/content/v1/58fd148be6f2e1ad3fd43b08/1505013903161-X6X9SUXQ9YEK89YQMSSP/IMG_1465.jpg?format=1000w', 5),
('figure_1', 300, 'image/jpg', 'https://mannequinmall.com/cdn/shop/products/best-seller-female-professional-dress-form-with-collapsible-shoulders-mm-pfdcs_10b3a4f2-8611-47c3-8e77-97b080f3ae36_1600x.jpg?v=1673944742', 6),
('figure_1', 300, 'image/jpg', 'https://images.thdstatic.com/productImages/b9af6c04-1d53-4991-9457-d8d4c3c6d675/svn/wiss-scissors-w22n-64_600.jpg', 7),
('figure_1', 300, 'image/WebP', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0uiskkCZ_m2fFHp-2Y-01WrV46AaG1wJSlVa7UpBCVLmQvu19lzwFn-BSYempojvYbsfKu2eruyUr6fBUes-f5p6C2MZpe9Bdp1DhqPjYLLHNQhpi7RbV_Q&usqp=CAE', 8),
('figure_1', 300, 'image/jpg', 'https://m.media-amazon.com/images/I/419wLgtNuYL.jpg', 9),
('figure_1', 300, 'image/jpg', 'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/7CD0C1660E18492E963F3E7A253917A6/10509767_1.jpg?fit=inside|1280:1280', 10),
('figure_1', 300, 'image/png', 'https://shop.redrockmicro.com/wp-content/uploads/2016/08/field-cinema-fully-loaded-iso-1024x1024.png', 11),

('figure_1', 300, 'image/WebP', 'https://www.cowboystudio.com/v/vspfiles/photos/EZSoftboxkit-2.jpg?v-cache=1392672168', 12),
('figure_1', 300, 'image/jpg', 'https://m.media-amazon.com/images/I/715TTPTajUL.jpg', 13),
('figure_1', 300, 'image/jpg', 'https://www.joann.com/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw875082c0/images/hi-res/82/8292294.jpg?sw=556&sh=680&sm=fit', 14),
('figure_1', 300, 'image/jpg', 'https://www.bhphotovideo.com/images/images2500x2500/sony_sony_rx10iv_digital_camera_1361560.jpg', 15),

('figure_1', 300, 'image/WebP', 'https://m.media-amazon.com/images/I/61GDYsGtFgL.jpg', 16),
('figure_1', 300, 'image/WebP', 'https://bjs.scene7.com/is/image/bjs/172772?$bjs-Zoom$', 17),
('figure_1', 300, 'image/WebP', 'https://s7.orientaltrading.com/is/image/OrientalTrading/13730110?$PDP_VIEWER_IMAGE$', 18),
('figure_1', 300, 'image/jpg', 'https://i.pinimg.com/originals/33/f1/7a/33f17a74cdd315759106d461b1c0acd3.jpg', 19),
('figure_1', 300, 'image/WebP', 'https://images.squarespace-cdn.com/content/v1/5565fa7ce4b0f52509427764/94d7bcad-12f7-4d71-8232-28bceb04ed75/Speedball+Linocutter+Carving+Tools', 20)




