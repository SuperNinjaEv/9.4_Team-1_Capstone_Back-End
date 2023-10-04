PGPASSWORD=R4NNrxnwI5hyAcLYu6CIJMHPyWAe7X2E psql -h dpg-ck52dcei9prc73e875r0-a.ohio-postgres.render.com -U craftopia_user craftopia_db_oi7x
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
('Spray Paint Set', 'A set of various colored spray paints.', 59.99, 10, 'good', 'Graffiti', 'felizj171', 1, 'https://m.media-amazon.com/images/I/51d5u5bP97L._AC_UF894,1000_QL80_.jpg'),
('Sculpting Tool Set', 'High-quality tools for sculpting.', 29.99, 5, 'neutral', 'Sculpting', 'felizj171', 1, 'https://ae01.alicdn.com/kf/Sf157bd5fc72340c48e294018ca0a6f9f9/22PCS-Pottery-Clay-Sculpting-Tools-Set-Kit-Smoothing-Wax-Carving-Pottery-Ceramic-Tools-Polymer-Shapers-Modeling.jpg'),

('Clay', '25 lbs of sculpting clay.', 40.00, 4, 'good', 'Sculpting', 'felizj171', 1, 'https://images.ctfassets.net/f1fikihmjtrp/CJFeUpMpOQkenXgTZy2S2/992cb213f03003cd28cbbd71f96bfbe8/30543-3550-1-4ww.jpg'),
('Stencil Kit', 'Stencil set for graffiti art.', 20.00, 8, 'neutral', 'Graffiti', 'felizj171', 1, 'https://m.media-amazon.com/images/I/91NOgyXyLRL.jpg'),
('Stone Block', 'Medium-sized stone for sculpting.', 70.00, 2, 'good', 'Sculpting', 'felizj171', 1, 'https://images.squarespace-cdn.com/content/v1/58fd148be6f2e1ad3fd43b08/1505013903161-X6X9SUXQ9YEK89YQMSSP/IMG_1465.jpg?format=1000w'),
('Designer Dress Form', 'Adjustable dress form for fashion design.', 150.00, 3, 'good', 'Fashion Design', 'Michel', 2,'https://mannequinmall.com/cdn/shop/products/best-seller-female-professional-dress-form-with-collapsible-shoulders-mm-pfdcs_10b3a4f2-8611-47c3-8e77-97b080f3ae36_1600x.jpg?v=1673944742'),
('Fabric Shears', 'High-quality shears for cutting fabrics.', 25.00, 7, 'neutral', 'Fashion Design', 'Michel', 2, 'https://images.thdstatic.com/productImages/b9af6c04-1d53-4991-9457-d8d4c3c6d675/svn/wiss-scissors-w22n-64_600.jpg'),
('Mannequin', 'Display mannequin for fashion design.', 80.00, 5, 'good', 'Fashion Design', 'Michel', 2, 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0uiskkCZ_m2fFHp-2Y-01WrV46AaG1wJSlVa7UpBCVLmQvu19lzwFn-BSYempojvYbsfKu2eruyUr6fBUes-f5p6C2MZpe9Bdp1DhqPjYLLHNQhpi7RbV_Q&usqp=CAE'),
('Sewing Machine', 'Industrial sewing machine.', 550.00, 1, 'neutral', 'Fashion Design', 'Michel', 2, 'https://m.media-amazon.com/images/I/419wLgtNuYL.jpg'),
('Fabric Bundle', 'Assorted fabrics for fashion design.', 40.00, 10, 'good', 'Fashion Design', 'Michel', 2, 'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/7CD0C1660E18492E963F3E7A253917A6/10509767_1.jpg?fit=inside|1280:1280'),
('Camera Rig', 'Stabilizing rig for cameras.', 300.00, 2, 'good', 'Photography', 'Evan', 3, 'https://shop.redrockmicro.com/wp-content/uploads/2016/08/field-cinema-fully-loaded-iso-1024x1024.png'),
('Lighting Kit', 'Comprehensive lighting kit for photography.', 250.00, 3, 'neutral', 'Filmmaking', 'Evan', 3, 'https://www.cowboystudio.com/v/vspfiles/photos/EZSoftboxkit-2.jpg?v-cache=1392672168'),
('Graphic Tablet', 'Digital graphic tablet for artists.', 150.00, 5, 'good', 'Digital Artistry', 'Evan', 3, 'https://m.media-amazon.com/images/I/715TTPTajUL.jpg'),
('Sketchbook', 'High-quality sketchbook for artists.', 15.00, 20, 'neutral', 'Drawing', 'Evan', 3, 'https://www.joann.com/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw875082c0/images/hi-res/82/8292294.jpg?sw=556&sh=680&sm=fit'),
('Digital Camera', 'High-resolution digital camera.', 700.00, 1, 'good', 'Filmmaking', 'Evan', 3, 'https://www.bhphotovideo.com/images/images2500x2500/sony_sony_rx10iv_digital_camera_1361560.jpg'),
('Easel', 'Adjustable easel for painting.', 75.00, 5, 'neutral', 'Painting', 'sharukh', 4, 'https://m.media-amazon.com/images/I/61GDYsGtFgL.jpg'),
('Acrylic Paint Set', 'Set of 24 acrylic paints.', 35.00, 10, 'good', 'Painting', 'sharukh', 4, 'https://bjs.scene7.com/is/image/bjs/172772?$bjs-Zoom$'),
('Screen Printing Kit', 'All-in-one screen printing kit.', 100.00, 3, 'neutral', 'Printmaking', 'sharukh', 4, 'https://s7.orientaltrading.com/is/image/OrientalTrading/13730110?$PDP_VIEWER_IMAGE$'),
('Canvas', '16x20 stretched canvas.', 18.00, 15, 'good', 'Painting', 'sharukh', 4, 'https://i.pinimg.com/originals/33/f1/7a/33f17a74cdd315759106d461b1c0acd3.jpg'),
('Linocut Tools', 'Set of tools for linocut printmaking.', 22.00, 7, 'neutral', 'Printmaking', 'sharukh', 4, 'https://images.squarespace-cdn.com/content/v1/5565fa7ce4b0f52509427764/94d7bcad-12f7-4d71-8232-28bceb04ed75/Speedball+Linocutter+Carving+Tools'),
('DSLR Camera', 'High-resolution digital SLR camera.', 1200.00, 3, 'good', 'Photography', 'Evan', 3, 'https://pascocamera.com/wp-content/uploads/Nikon-D7500.jpg'),
('Tripod', 'Sturdy tripod suitable for various camera models.', 100.00, 5, 'good', 'Photography', 'Evan', 3, 'https://ae01.alicdn.com/kf/H8daf26af77844a438c2114a3c427ef07a/Tripod-For-Phone-Flexible-Sponge-Octopus-Mini-Tripod-For-IPhone-Mini-Camera-Tripod-Phone-Holder-Clip.jpg'),
('Photography Lightbox', 'Lightbox for product photography.', 75.00, 2, 'neutral', 'Photography', 'Evan', 3, 'https://i.ebayimg.com/images/g/pmYAAOSw989buemm/s-l1200.webp'),
('Camera Lens Kit', 'Set of three lenses for different photography styles.', 500.00, 1, 'good', 'Photography', 'sharukh', 4, 'https://www.shopapexel.com/cdn/shop/products/shopapexel-hb5-cpl-with-star-img4_800x.jpg?v=1695331032');



INSERT INTO tool_media (
    file_name,
    file_size,  
    file_type,
    file_url,
    tool_id  
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
('figure_1', 300, 'image/WebP', 'https://images.squarespace-cdn.com/content/v1/5565fa7ce4b0f52509427764/94d7bcad-12f7-4d71-8232-28bceb04ed75/Speedball+Linocutter+Carving+Tools', 20),
('figure_1', 300, 'image/jpg', 'https://pascocamera.com/wp-content/uploads/Nikon-D7500.jpg', 21),
('figure_1', 300, 'image/jpg', 'https://ae01.alicdn.com/kf/H8daf26af77844a438c2114a3c427ef07a/Tripod-For-Phone-Flexible-Sponge-Octopus-Mini-Tripod-For-IPhone-Mini-Camera-Tripod-Phone-Holder-Clip.jpg', 22),
('figure_1', 300, 'image/webp', 'https://i.ebayimg.com/images/g/pmYAAOSw989buemm/s-l1200.webp', 23),
('figure_1', 300, 'image/jpg', 'https://www.shopapexel.com/cdn/shop/products/shopapexel-hb5-cpl-with-star-img4_800x.jpg?v=1695331032', 24);


-- ____________________________________________________________________Posts
-- ____________________________________________________________________Posts

-- ____________________________________________________________________Posts

-- ____________________________________________________________________Posts

-- ____________________________________________________________________Posts

-- Posts Seed Data

-- Juan
INSERT INTO posts (title, category, created_by, body, thumbnail, user_id)
VALUES
('Graffiti Art on Walls', 'Graffiti', 'felizj171', 'My latest mural in Brooklyn.', 'https://www.wallsauce.com/images/hero/cat/1131/645/graffiti.jpg', 1),
('Sculpting a Modern Art Piece', 'Sculpting', 'felizj171', 'Work in progress on my stone sculpture.', 'https://images.saatchiart.com/saatchi/754804/art/8764464/7827947-HSC00923-6.jpg', 1),
('Painting the City', 'Painting', 'felizj171', 'My thoughts on city life expressed through paint.', 'https://i.etsystatic.com/20523071/r/il/d59fb1/3316691680/il_570xN.3316691680_dlf1.jpg', 1),
('The Art of Landscape Photography', 'Photography', 'Evan', 'Capturing nature’s vastness and beauty.', 'https://static.photocdn.pt/images/articles/2022/01/12/The_Keys_to_Beautiful_Landscape_Photography.webp', 3),
('Cityscapes at Night', 'Photography', 'Evan', 'The city lights and their mesmerizing reflections.', 'https://iso.500px.com/wp-content/uploads/2014/07/hong-kong-the-peak-view.jpg', 3),
-- ('Macro Photography Tips', 'Photography', 'Evan', 'Getting close with the world of the tiny.', 'url_to_macro_photo', 3),
-- ('Portraits in Natural Light', 'Photography', 'Evan', 'Harnessing the power of the sun for emotive portraits.', 'url_to_portrait_photo', 3),
-- ('Wildlife Adventures', 'Photography', 'Evan', 'The challenges and rewards of wildlife photography.', 'url_to_wildlife_photo', 3),
-- Painting Tutorials
('Mastering Watercolor Techniques', 'Painting', 'Evan', 'Step 1: Begin with a simple sketch on watercolor paper. Step 2: Wet the paper with a clean brush. Step 3: Mix your desired colors using a palette. Step 4: Apply the paint using soft strokes. Step 5: Experiment with wet-on-wet and wet-on-dry techniques. Step 6: Allow layers to dry before adding details. Step 7: Finish with deeper colors for shadows and detailing.', 'https://jennarainey.com/wp-content/uploads/2021/05/BGTW-Two-Tech-shot-1.png', 3),
('Exploring Acrylics for Beginners', 'Painting', 'Michel', 'Step 1: Set up your workspace with brushes, canvas, and acrylic paints. Step 2: Start with a basic sketch or background wash. Step 3: Layer your paints, starting with broader strokes. Step 4: Blend colors directly on the canvas for a smooth transition. Step 5: Use thicker paint for texture and depth. Step 6: Remember, acrylics dry fast - use a retarder if needed. Step 7: Seal your artwork with a clear varnish once done.', 'https://feelingnifty.com/wp-content/uploads/2020/06/how-to-paint-clouds-pink-sky-2-789x1024.jpg', 2),

-- Sculpting Tutorials
('Creating Lifelike Figures in Clay', 'Sculpting', 'sharukh', 'Step 1: Choose the right type of clay for your project. Step 2: Start with a wire armature for stability. Step 3: Apply clay over the armature, building the general shape. Step 4: Define features using sculpting tools. Step 5: Add textures for realism. Step 6: Regularly turn the sculpture to work from different angles. Step 7: Allow the sculpture to dry slowly, or bake if using oven-bake clay.', 'https://m.media-amazon.com/images/I/B1MGBRILKnS._SY250_.jpg', 4),
('Basics of Stone Carving', 'Sculpting', 'Michel', 'Step 1: Select a soft stone like soapstone or alabaster for beginners. I have included this stone in my listings in the event you would like to purchase it. The image of the stone is in figure 4. Step 2: Sketch your design on paper and transfer the basic outline to the stone. See figure 5 for more details on a rough sketch. Step 3: Use chisels and hammers to remove large chunks of unwanted stone, as my assistant is doing in figure 1. Step 4: Refine the shape with rasps and files. Step 5: Sand the sculpture with increasingly fine grits for a smooth finish. Step 6: Polish with wax or stone sealants for protection. Figure 2 and 3 are examples of what my students have finished after taking my sculpting class', 'https://teucerwilson.co.uk/wp-content/uploads/2021/10/Teucer-Wilson-Carving-Techniques.jpeg', 2);


INSERT INTO post_media (file_name, file_size, file_type, file_url, post_id)
VALUES
('figure_1', 300, 'image/jpg', 'https://www.wallsauce.com/images/hero/cat/1131/645/graffiti.jpg', 1),
('figure_2', 300, 'image/webp', 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/F/O/FOT-0027284631_1_jpg.webp', 1),
('figure_3', 300, 'image/jpg', 'https://storage.googleapis.com/pod_public/1300/167869.jpg', 1),
('figure_1', 300, 'image/jpg', 'https://images.saatchiart.com/saatchi/754804/art/8764464/7827947-HSC00923-6.jpg', 2),
('figure_2', 300, 'image/jpg', 'https://www.bridgewaterstudio.net/hubfs/Blog_Images/Campaign%2005/foam-sculptures.jpg', 2),
('figure_3', 300, 'image/jpg', 'https://www.aquasabi.com/media/image/product/19045/md/back-to-nature-river-stone-d.jpg', 2),
('figure 1', 300, 'image/jpg', 'https://i.etsystatic.com/20523071/r/il/d59fb1/3316691680/il_570xN.3316691680_dlf1.jpg', 3),
('figure 2', 300, 'image/jpg', 'https://i.etsystatic.com/23025695/r/il/2daf2d/4319668906/il_fullxfull.4319668906_n94j.jpg', 3),
('figure 3', 300, 'image/jpg', 'https://i.etsystatic.com/20523071/r/il/d59fb1/3316691680/il_570xN.3316691680_dlf1.jpg', 3),
-- Landscape
('figure_1', 300, 'image/webp', 'https://static.photocdn.pt/images/articles/2022/01/12/The_Keys_to_Beautiful_Landscape_Photography.webp', 4),
('figure_2', 300, 'image/jpg', 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg', 4),
('figure_3', 300, 'image/jpg', 'https://thumbs.dreamstime.com/b/wonderful-summer-landscape-lavender-fields-provence-valensole-france-picturesque-nature-agriculture-area-popular-146780278.jpg', 4),
-- Night Time CityScape
('figure_1', 300, 'image/jpg', 'https://iso.500px.com/wp-content/uploads/2014/07/hong-kong-the-peak-view.jpg
', 5),
('figure_2', 300, 'image/jpeg', 'https://cc-prod.scene7.com/is/image/CCProdAuthor/cityscape-photography_P1_mobile_360x270?$pjpeg$&jpegSize=200&wid=720', 5),
('figure_3', 300, 'image/jpg', 'https://cdn.mos.cms.futurecdn.net/oowFiyShRt5Pp3cnJbCDv9.jpg', 5),

('figure_1', 300, 'image/png', 'https://jennarainey.com/wp-content/uploads/2021/05/BGTW-Two-Tech-shot-1.png', 6),
('figure_2', 300, 'image/jpg', 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/19414/images/JMqJaxczSleSZyhmyOtA_Landscape-painting-for-beginners.jpg', 6),
('figure_3', 300, 'image/png', 'https://www.kitchentableclassroom.com/wp-content/uploads/2017/08/watercolor-techniques-collage-4-tiny-683x1024.png', 6),

('figure_1', 300, 'image/jpg', 'https://feelingnifty.com/wp-content/uploads/2020/06/how-to-paint-clouds-pink-sky-2-789x1024.jpg', 7),
('figure_2', 300, 'image/jpg', 'https://img-c.udemycdn.com/course/750x422/3044266_011f.jpg', 7),
('figure_3', 300, 'image/jpg', 'https://crafts.arts.ncsu.edu/wp-content/uploads/sites/32/2023/07/Intro-to-Acrylics_Daniel-Creech.jpg', 7),





-- sculpting
('sculpture1_image1', 300, 'image/jpeg', 'https://teucerwilson.co.uk/wp-content/uploads/2021/10/Teucer-Wilson-Carving-Techniques.jpeg', 9),
('sculpture1_image1', 300, 'image/jpg', 'https://5.imimg.com/data5/SELLER/Default/2020/11/GX/ZZ/MI/98132100/stone-carving-work.jpg', 9),
('sculpture1_image1', 300, 'image/jpg', 'https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2022/09/30/d426fc9c-080d-4596-ba37-a37714107de9_8925f15f.jpg', 9),
('sculpture1_image1', 300, 'image/jpg', 'https://images.squarespace-cdn.com/content/v1/58fd148be6f2e1ad3fd43b08/1505013903161-X6X9SUXQ9YEK89YQMSSP/IMG_1465.jpg?format=1000w', 9),
('sculpture1_image1', 300, 'image/jpg', 'https://www.thesculpturepark.com/wordpress/wp-content/uploads/The-thinker-rodin-le-penseur-paris-sketches-13.jpg
', 9),





-- painting





('sculpture1_image1', 300, 'image/jpg', 'https://m.media-amazon.com/images/I/B1MGBRILKnS._SY250_.jpg', 8),
('sculpture1_image1', 300, 'image/jpg', 'https://i.ytimg.com/vi/ZGRStBE4b48/maxresdefault.jpg', 8),
('sculpture1_image1', 300, 'image/jpg', 'https://www.keeeps.co.uk/cdn/shop/articles8pexels-monstera-5302903_Medium_7238bbe0-8756-4372-af7b-3d55f610a4ca_300x300.jpg?v=1637076397', 9);