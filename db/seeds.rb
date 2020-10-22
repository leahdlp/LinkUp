# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

# https://link-up-seeds.us-west-1.amazonaws.com/2chainz.jpg


# USERS:
User.destroy_all
user0 = User.create!({ name: "Tyrone Bogues", email: "thanAMug@gmail.com", password: "0123456789" })
user1 = User.create!({ name: "Anthony Holiday", email: "anthony@holiday.com", password: "0123456789" })
user2 = User.create!({ name: "Eddie Holiday", email: "eddie@holiday.com", password: "0123456789" })
user3 = User.create!({ name: "Eddie Holiday III", email: "cuzEddie@holiday.com", password: "0123456789" })
user4 = User.create!({ name: "Nathan Holiday", email: "nathan@holiday.com", password: "0123456789" })
user5 = User.create!({ name: "Chris McNealy", email: "chrisMac@gmail.com", password: "0123456789" })
user6 = User.create!({ name: "Kelson Quan", email: "kquan@gmail.com", password: "0123456789" })
user7 = User.create!({ name: "Sasha Daddeh", email: "sdaddeh@gmail.com", password: "0123456789" })
user8 = User.create!({ name: "Kojo Achiampong", email: "kojo@gmail.com", password: "0123456789" })
user9 = User.create!({ name: "Michael Johson", email: "mj@gmai.com", password: "0123456789" })
user10 = User.create!({ name: "Marlanna Evans", email: "rapsid@gmail.com", password: "0123456789" })
user11 = User.create!({ name: "Windel Edwards", email: "winBeneto@gmail.com", password: "0123456789" })
user12 = User.create!({ name: "Tauheed Epps", email: "2@truuu.com", password: "0123456789" })
user13 = User.create!({ name: "Dwayne Carter", email: "young@mulababy.com", password: "0123456789" })
user14 = User.create!({ name: "Megan Pete", email: "meg@wap.com", password: "0123456789" })
user15 = User.create!({ name: "Belcalis Almanzar", email: "bronx@gmail.com", password: "0123456789" })
user16 = User.create!({ name: "Mary Davis", email: "mary@SOSBand.com", password: "0123456789" })
user17 = User.create!({ name: "Abdul Ra'oof", email: "Abdul@SOSBand.com", password: "0123456789" })
user18 = User.create!({ name: "Jason Bryant", email: "Jason@SOSBand.com", password: "0123456789" })
user19 = User.create!({ name: "Bruno Speight", email: "Bruno@SOSBand.com", password: "0123456789" })
user20 = User.create!({ name: "Tobe Nwigwe", email: "tobe@tryjesus.com", password: "0123456789" })
user21 = User.create!({ name: "Jabari Johson", email: "jabari@tryjesus.com", password: "0123456789" })
user22 = User.create!({ name: "Gavin Turek", email: "gavin@theDistance.com", password: "0123456789" })
user23 = User.create!({ name: "Marvin Sapp", email: "marvin@gmail.com", password: "0123456789" })
user24 = User.create!({ name: "Tanerelle Stephens", email: "tanerelle@gmail.com", password: "0123456789" })
user25 = User.create!({ name: "Kirby Dockery", email: "kirby@velvet.com", password: "0123456789" })
user26 = User.create!({ name: "Erykah Badu", email: "erykah@baduizm.com", password: "0123456789" })
user27 = User.create!({ name: "Jill Scott", email: "jill@neo-soul.com", password: "0123456789" })
user28 = User.create!({ name: "Patrice Rushen", email: "patrice@gmail.com", password: "0123456789" })
user29 = User.create!({ name: "Evelyn King", email: "evelyn@shamps.com", password: "0123456789" })
user30 = User.create!({ name: "Jane Oranika", email: "chika@crown.com", password: "0123456789" })
user31 = User.create!({ name: "Jorja Smith", email: "jorja@gmail.com", password: "0123456789" })
user32 = User.create!({ name: "Charmayne Maxwel", email: "charmayne@brownstone.com", password: "0123456789" })
user33 = User.create!({ name: "Nicci Gilber", email: "nicci@brownstone.com", password: "0123456789" })
user34 = User.create!({ name: "Maria Kelly", email: "rico@nasty.com", password: "0123456789" })
user35 = User.create!({ name: "Kimberli Wright", email: "kimberli@brownstone.com", password: "0123456789" })
user36 = User.create!({ name: "Olubowale Akintimehin", email: "wale@aboutNothing.com", password: "0123456789" })
user37 = User.create!({ name: "Ermias Asgehdom", email: "nipsey@tmc.com", password: "0123456789" })
user38 = User.create!({ name: "Kobe Bryant", email: "kobe@mambaFoundation.com", password: "0123456789" })
user39 = User.create!({ name: "Sean Anderson", email: "sean@d-town.com", password: "0123456789" })
user40 = User.create!({ name: "Robyn Fenty", email: "robyn@bados.com", password: "0123456789" })
user41 = User.create!({ name: "Diamonte Harper", email: "diamonte@gmail.com", password: "0123456789" })
user42 = User.create!({ name: "Katora Marrero", email: "katora@gmail.com", password: "0123456789" })
user43 = User.create!({ name: "Cameron Thomaz", email: "cameron@gmail.com", password: "0123456789" })
user44 = User.create!({ name: "Allen Iverson", email: "allen@gmail.com", password: "0123456789" })
user45 = User.create!({ name: "Tracy McGrady", email: "tracy@gmail.com", password: "0123456789" })
user46 = User.create!({ name: "Paul Pierce", email: "paul@gmail.com", password: "0123456789" })
user47 = User.create!({ name: "Kevin Garnett", email: "kg@gmail.com", password: "0123456789" })
user48 = User.create!({ name: "Chris Paul", email: "chris@gmail.com", password: "0123456789" })
user49 = User.create!({ name: "Dwyane Wade", email: "d-wade@gmail.com", password: "0123456789" })
user50 = User.create!({ name: "Gabrielle Union", email: "gabrielle@gmail.com", password: "0123456789" })
user51 = User.create!({ name: "Angela Bassett", email: "angela@gmail.com", password: "0123456789" })
user52 = User.create!({ name: "Courtney Vance", email: "courtney@gmail.com", password: "0123456789" })
user53 = User.create!({ name: "Danai Gurira", email: "danai@gmail.com", password: "0123456789" })
user54 = User.create!({ name: "Lupita Nyong'o", email: "lupita@gmail.com", password: "0123456789" })
user55 = User.create!({ name: "Laurence Fishburn", email: "laurence@gmail.com", password: "0123456789" })
user56 = User.create!({ name: "Taye Diggs", email: "taye@gmail.com", password: "0123456789" })
user57 = User.create!({ name: "Paula Patton", email: "paula@gmail.com", password: "0123456789" })
user58 = User.create!({ name: "Nia Long", email: "nia@gmail.com", password: "0123456789" })
user59 = User.create!({ name: "Loretta Devine", email: "loretta@gmail.com", password: "0123456789" })
user60 = User.create!({ name: "Regina King", email: "regina@gmail.com", password: "0123456789" })
user61 = User.create!({ name: "Regina Hall",email: "regina2@gmail.com", password: "0123456789" })
user62 = User.create!({ name: "Jackee Harry", email: "jackee@gmail.com", password: "0123456789" })
user63 = User.create!({ name: "Robin Thede", email: "robinThe@gmail.com", password: "0123456789" })
user64 = User.create!({ name: "Quinta Bruson", email: "quinta@gmail.com", password: "0123456789" })
user65 = User.create!({ name: "Gabrielle Dennis", email: "gabrielleD@gmail.com", password: "0123456789" })
user66 = User.create!({ name: "Ashley Black", email: "ashley@gmail.com", password: "0123456789" })
user67 = User.create!({ name: "Wendy Robinson", email: "wendy@gmail.com", password: "0123456789" })
user68 = User.create!({ name: "Kim Fields", email: "kim@fields.com", password: "0123456789" })
user69 = User.create!({ name: "Dana Owens", email: "dana@gmail.com", password: "0123456789" })
user70 = User.create!({ name: "Kim Coles", email: "kim@gmail.com", password: "0123456789" })
user71 = User.create!({ name: "Erika Alexander", email: "erika@gmail.com", password: "0123456789" })
user72 = User.create!({ name: "Jada Pinkett", email: "jada@gmail.com", password: "0123456789" })
user73 = User.create!({ name: "DeAnthony Carlos", email: "deanthony@gmail.com", password: "0123456789" })
user74 = User.create!({ name: "Jidenna Mobinson", email: "jidenna@gmail.com", password: "0123456789" })
user75 = User.create!({ name: "Jamila Woods", email: "jamila@gmail.com", password: "0123456789" })
user76 = User.create!({ name: "Damini Rex", email: "damina@gmail.com", password: "0123456789" })
user77 = User.create!({ name: "Fela Kuti", email: "fela@gmail.com", password: "0123456789" })
user78 = User.create!({ name: "Luther Vandross", email: "luther@gmail.com", password: "0123456789" })
user79 = User.create!({ name: "Anthony Hamilton", email: "anthony@gmail.com", password: "0123456789" })
user80 = User.create!({ name: "Laz Alonso", email: "laz@gmail.com", password: "0123456789" })
user81 = User.create!({ name: "Jean Basquiat", email: "jean@gmail.com", password: "0123456789" })
user82 = User.create!({ name: "John Carlos", email: "johm@gmail.com", password: "0123456789" })
user83 = User.create!({ name: "Victor Cruz", email: "victor@gmail.com", password: "0123456789" })
user84 = User.create!({ name: "David Brewster", email: "david@gmail.com", password: "0123456789" })
user85 = User.create!({ name: "Lisa Lopes", email: "lisa@gmail.com", password: "0123456789" })
user86 = User.create!({ name: "Diana De Los Santos", email: "diana@gmail.com", password: "0123456789" })
user87 = User.create!({ name: "Miguel Pimentel", email: "miguel@gmail.com", password: "0123456789" })
user88 = User.create!({ name: "Christine Flores", email: "christine@gmail.com", password: "0123456789" })
user89 = User.create!({ name: "Maria de la Soledad O'Brien", email: "mariadelasoledad@gmail.com", password: "0123456789" })
user90 = User.create!({ name: "Rosie Perez", email: "rosie@gmail.com", password: "0123456789" })
user91 = User.create!({ name: "Yasiin Bey", email: "yasiin@gmail.com", password: "0123456789" })
user92 = User.create!({ name: "Mahershala Ali", email: "mahershala@gmail.com", password: "0123456789" })
user93 = User.create!({ name: "Neelam Hakeem", email: "neelam@gmail.com", password: "0123456789" })
user94 = User.create!({ name: "Krissah Thompson", email: "krissah@gmail.com", password: "0123456789" })
user95 = User.create!({ name: "Madeline Swegle", email: "madeline@gmail.com", password: "0123456789" })
user96 = User.create!({ name: "Arthell Isom", email: "arthell@gmail.com", password: "0123456789" })
user97 = User.create!({ name: "MJ Rodriguez", email: "mj@gmail.com", password: "0123456789" })
user98 = User.create!({ name: "Indya Moore", email: "indya@gmail.com", password: "0123456789" })
user99 = User.create!({ name: "Dominique Jackson", email: "dominique@gmail.com", password: "0123456789" })
user100 = User.create!({ name: "Anglica Ross", email: "angelica@gmail.com", password: "0123456789" })
user101 = User.create!({ name: "Janet Mock", email: "janeta@gmail.com", password: "0123456789" })
user102 = User.create!({ name: "Billy Porter", email: "billy@gmail.com", password: "0123456789" })
user103 = User.create!({ name: "Gerald Rivera", email: "maxwell@gmail.com", password: "0123456789" })
user104 = User.create!({ name: "Michael Archer", email: "d@angelo.com", password: "0123456789"})

user0.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/2chainz.jpg"), filename: "tyrone.jpg")
user1.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/anthony.jpg"), filename: "anthony.jpg")
user2.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/sis.jpg"), filename: "eddie.jpg")
user3.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/eddie3.jpeg"), filename: "eddie3.jpeg")
user4.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/sis.jpg"), filename: "sis.jpg")
user5.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/cmac.jpg"), filename: "cmac.jpg")
user6.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/solo-girl.jpg"), filename: "kquan.jpg")
user7.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/solo-girl.jpg"), filename: "sasha.jpg")
user8.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/sis.jpg"), filename: "kojo.jpg")
user9.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/sis.jpg"), filename: "mj.jpg")
user10.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/rapsody.jpg"), filename: "rapsody.jpg")
user11.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/gyptian.jpg"), filename: "windel.jpg")
user12.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/2chainz.jpg"), filename: "2chainz.jpg")
user13.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/wayne.jpg"), filename: "wayne.jpg")
user14.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/meg.jpg"), filename: "meg.jpg")
user15.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/cardi.jpg"), filename: "cardi.jpg")
user16.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/maryD.jpg"), filename: "maryD.jpg")
user17.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/abdul.jpg"), filename: "abdul.jpg")
user18.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/jasonB.jpeg"), filename: "jasonB.jpeg")
user19.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/bruno.jpg"), filename: "bruno.jpg")
user20.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/tobe.jpg"), filename: "tobe.jpg")
user21.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/jabari.jpeg"), filename: "jabari.jpeg")
user22.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/gavin.jpg"), filename: "gavin.jpg")
user23.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/marvinS.jpeg"), filename: "marvinS.jpeg")
user24.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/tanerelle.jpg"), filename: "tanerelle.jpg")
user25.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/kirby.jpg"), filename: "kirby.jpg")
user26.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/erykah.jpg"), filename: "erykah.jpg")
user27.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/jilly.jpg"), filename: "jilly.jpg")
user28.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/patrice.jpg"), filename: "patricia.jpg")
user29.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/evelyn.jpg"), filename: "evelyn.jpg")
user30.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/chika.jpg"), filename: "chika.jpg")
user31.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/jorja.jpg"), filename: "jorja.jpg")
user32.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/charmayne.jpg"), filename: "charmaynee.jpg")
user33.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/nicci.jpg"), filename: "nicci.jpg")
user34.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/rico.jpg"), filename: "rico.jpg")
user35.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/sis.jpg"), filename: "kimberly.jpg")
user36.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/wale.jpg"), filename: "wale.jpg")
user37.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/nipsey.jpeg"), filename: "nipsey.jpeg")
user38.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/kobe.jpg"), filename: "kobe.jpg")
user39.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/sean.jpg"), filename: "sean.jpg")
user40.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/rihanna.jpg"), filename: "rihanna.jpg")
user41.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/diamonte.jpeg"), filename: "diamonte.jpeg")
user42.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/youngMA.jpg"), filename: "youngMA.jpg")
user43.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/wiz.jpg"), filename: "wiz.jpg")
user44.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/AI.jpg"), filename: "AI.jpg")
user45.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/tmac.jpg"), filename: "tmac.jpg")
user46.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/paul.jpg"), filename: "paul.jpg")
user47.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/KG.jpg"), filename: "KG.jpg")
user48.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/CP3.jpg"), filename: "CP3.jpg")
user49.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/d-wade.jpg"), filename: "d-wade.jpg")
user50.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/gabs.jpg"), filename: "gabs.jpg")
user51.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/angela.jpg"), filename: "angela.jpg")
user52.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/courtneyB.jpg"), filename: "courtneyB.jpg")
user53.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/danai.jpg"), filename: "danai.jpg")
user54.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/lupita.jpg"), filename: "lupita.jpg")
user55.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/laurence.jpg"), filename: "lawrence.jpg")
user56.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/taye.png"), filename: "taye.png")
user57.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/paula.jpg"), filename: "paula.jpg")
user58.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/nia.jpeg"), filename: "nia.jpeg")
user59.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/loretta.jpg"), filename: "loretta.jpg")
user60.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/reginaK.jpeg"), filename: "reginaK.jpeg")
user61.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/reginaH.jpg"), filename: "reginaH.jpg")
user62.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/jackee.jpg"), filename: "jackee.jpg")
user63.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/robinT.jpg"), filename: "robinT.jpg")
user64.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/quinta.jpg"), filename: "quinta.jpg")
user65.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/gabrielleD.jpg"), filename: "gabrielleD.jpg")
user66.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/ashley.png"), filename: "ashley.png")
user67.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/wendy.jpg"), filename: "wendy.jpg")
user68.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/kimF.jpg"), filename: "kimF.jpg")
user69.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/queenLatifah.jpg"), filename: "queenLatifah.jpg")
user70.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/kimC.jpg"), filename: "kimC.jpg")
user71.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/erika.jpg"), filename: "erika.jpg")
user72.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/jada.jpg"), filename: "jada.jpg")
user73.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/goldlink.jpg"), filename: "goldlink.jpg")
user74.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/jidenna.jpg"), filename: "jidenna.jpg")
user75.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/jamila.jpg"), filename: "jamila.jpg")
user76.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/burna.jpg"), filename: "burna.jpg")
user77.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/fela.jpg"), filename: "fela.jpg")
user78.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/luther.png"), filename: "luther.png")
user79.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/anthonyH.jpeg"), filename: "anthonyH.jpeg")
user80.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/laz.png"), filename: "laz.png")
user81.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/jean.jpg"), filename: "jean.jpg")
user82.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/johnC.jpg"), filename: "johnC.jpg")
user83.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/victorC.jpeg"), filename: "victorC.jpeg")
user84.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/dave.jpg"), filename: "dave.jpg")
user85.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/lefteye.jpg"), filename: "lefteye.jpg")
user86.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/amara.jpg"), filename: "amara.jpg")
user87.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/miguel.jpeg"), filename: "miguel.jpeg")
user88.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/milian.jpeg"), filename: "milian.jpeg")
user89.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/soledad.jpeg"), filename: "soledad.jpeg")
user90.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/rosie.jpg"), filename: "rosie.jpg")
user91.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/mos.jpg"), filename: "mos.jpg")
user92.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/mahershala.jpg"), filename: "mahershala.jpg")
user93.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/neelam.jpeg"), filename: "neelam.jpeg")
user94.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/krissah.jpeg"), filename: "krissah.jpeg")
user95.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/madeline.jpg"), filename: "madeline.jpg")
user96.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/arthell.jpg"), filename: "arthell.jpg")
user97.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/mjR.jpg"), filename: "mjR.jpg")
user98.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/indya.jpg"), filename: "indya.jpg")
user99.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/dominique.jpg"), filename: "dominique.jpg")
user100.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/angelica.jpg"), filename: "angelica.jpg")
user101.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/janetM.jpg"), filename: "janetM.jpg")
user102.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/billy.jpg"), filename: "billy.jpg")
user103.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/maxwell.jpg"), filename: "maxwell.jpg")
user104.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/dangelo.jpg"), filename: "dangelo.jpg")



# CATEGORIES
Category.destroy_all
cat1 = Category.create!({ name: "Arts & Culture" })
cat2 = Category.create!({ name: "Book Clubs" })
cat3 = Category.create!({ name: "Career & Business" })
cat4 = Category.create!({ name: "Cars & Motorcycles" })
cat5 = Category.create!({ name: "Community & Environment" })
cat6 = Category.create!({ name: "Dancing" })
cat7 = Category.create!({ name: "Education & Learning" })
cat8 = Category.create!({ name: "Fashion & Beauty" })
cat9 = Category.create!({ name: "Fitness" })
cat10 = Category.create!({ name: "Food & Drink" })
cat11 = Category.create!({ name: "Games" })
cat12 = Category.create!({ name: "Health & Wellbeing" })
cat13 = Category.create!({ name: "Hobbies & Crafts" })
cat14 = Category.create!({ name: "LGBT" })
cat15 = Category.create!({ name: "Language & Ethnic Identity" })
cat16 = Category.create!({ name: "Lifestyle" })
cat17 = Category.create!({ name: "Movement & Politics" })
cat18 = Category.create!({ name: "Movies & Film" })
cat19 = Category.create!({ name: "Music" })
cat20 = Category.create!({ name: "New Age & Spirituality" })
cat21 = Category.create!({ name: "Outdoors & Adventure" })
cat22 = Category.create!({ name: "Paranormal" })
cat23 = Category.create!({ name: "Parents & Family" })
cat24 = Category.create!({ name: "Pets & Animals" })
cat25 = Category.create!({ name: "Photography" })
cat26 = Category.create!({ name: "Religion & Beliefs" })
cat27 = Category.create!({ name: "Sci-Fi & Fantasy" })
cat28 = Category.create!({ name: "Singles" })
cat29 = Category.create!({ name: "Socializings" })
cat30 = Category.create!({ name: "Sports & Recreation" })
cat31 = Category.create!({ name: "Support" })
cat32 = Category.create!({ name: "Tech" })
cat33 = Category.create!({ name: "Writing" })



# #SUB-CATEGORIES
Subcategory.destroy_all
sub_cat1 = Subcategory.create!({ name: "3D Artsits", category_id: cat1.id })
sub_cat2 = Subcategory.create!({ name: "Acting", category_id: cat1.id })
sub_cat3 = Subcategory.create!({ name: "Architecture", category_id: cat1.id })
sub_cat4 = Subcategory.create!({ name: "Illustration", category_id: cat1.id })
sub_cat5 = Subcategory.create!({ name: "Improv", category_id: cat1.id })
sub_cat6 = Subcategory.create!({ name: "Painting", category_id: cat1.id })
sub_cat7 = Subcategory.create!({ name: "Sketching", category_id: cat1.id })
sub_cat8 = Subcategory.create!({ name: "Musical Theatre", category_id: cat1.id })
sub_cat9 = Subcategory.create!({ name: "Spoken Word", category_id: cat1.id })
sub_cat10 = Subcategory.create!({ name: "African-American Authors", category_id: cat2.id })
sub_cat11 = Subcategory.create!({ name: "Book Club", category_id: cat2.id })
sub_cat12 = Subcategory.create!({ name: "Book Swap", category_id: cat2.id })
sub_cat13 = Subcategory.create!({ name: "Books and Drinks", category_id: cat2.id })
sub_cat14 = Subcategory.create!({ name: "Coffee & Books", category_id: cat2.id })
sub_cat15 = Subcategory.create!({ name: "Fiction", category_id: cat2.id })
sub_cat16 = Subcategory.create!({ name: "Literature", category_id: cat2.id })
sub_cat17 = Subcategory.create!({ name: "Novel Reading", category_id: cat2.id })
sub_cat18 = Subcategory.create!({ name: "Readers", category_id: cat2.id })
sub_cat19 = Subcategory.create!({ name: "Reading", category_id: cat2.id })
sub_cat20 = Subcategory.create!({ name: "Women's Book Club", category_id: cat2.id })
sub_cat21 = Subcategory.create!({ name: "3D Modeling", category_id: cat3.id })
sub_cat22 = Subcategory.create!({ name: "Advertising", category_id: cat3.id })
sub_cat23 = Subcategory.create!({ name: "Angel Investors", category_id: cat3.id })
sub_cat24 = Subcategory.create!({ name: "Building Residual Income", category_id: cat3.id })
sub_cat25 = Subcategory.create!({ name: "Business Owners", category_id: cat3.id })
sub_cat26 = Subcategory.create!({ name: "Consulting", category_id: cat3.id })
sub_cat27 = Subcategory.create!({ name: "Digital Marketing", category_id: cat3.id })
sub_cat28 = Subcategory.create!({ name: "Event Plann8ng", category_id: cat3.id })
sub_cat29 = Subcategory.create!({ name: "Job Interview Prep", category_id: cat3.id })
sub_cat30 = Subcategory.create!({ name: "Startup Incubation", category_id:cat3.id })
sub_cat31 = Subcategory.create!({ name: "Cars", category_id: cat4.id })
sub_cat32 = Subcategory.create!({ name: "Ducati", category_id: cat4.id })
sub_cat33 = Subcategory.create!({ name: "Jeep", category_id: cat4.id })
sub_cat34 = Subcategory.create!({ name: "Kawasaki Motorcycles", category_id: cat4.id })
sub_cat35 = Subcategory.create!({ name: "Scooter", category_id: cat4.id })
sub_cat36 = Subcategory.create!({ name: "Sport Bikes", category_id: cat4.id })
sub_cat37 = Subcategory.create!({ name: "Sports Cars", category_id: cat4.id })
sub_cat38 = Subcategory.create!({ name: "Suzuki Motorcycles", category_id: cat4.id })
sub_cat39 = Subcategory.create!({ name: "Alternative Energy", category_id: cat5.id })
sub_cat40 = Subcategory.create!({ name: "Charity & Philanthropy", category_id:cat5.id })
sub_cat41 = Subcategory.create!({ name: "Civil Rights", category_id: cat5.id })
sub_cat42 = Subcategory.create!({ name: "Community Gardening", category_id: cat5.id })
sub_cat43 = Subcategory.create!({ name: "Emergency Preparedness", category_id: cat5.id })
sub_cat44 = Subcategory.create!({ name: "Farmers Market", category_id: cat5.id })
sub_cat45 = Subcategory.create!({ name: "Mentor", category_id: cat5.id })
sub_cat46 = Subcategory.create!({ name: "Recycling", category_id: cat5.id })
sub_cat47 = Subcategory.create!({ name: "Social Justice", category_id: cat5.id })
sub_cat48 = Subcategory.create!({ name: "Sustainability", category_id: cat5.id })
sub_cat49 = Subcategory.create!({ name: "Transportation", category_id: cat5.id })
sub_cat50 = Subcategory.create!({ name: "World Peace", category_id:cat5.id })
sub_cat51 = Subcategory.create!({ name: "Argentine Tango", category_id: cat6.id })
sub_cat52 = Subcategory.create!({ name: "Ballet", category_id: cat6.id })
sub_cat53 = Subcategory.create!({ name: "Dance Lessons", category_id: cat6.id })
sub_cat54 = Subcategory.create!({ name: "Fire Performers", category_id: cat6.id })
sub_cat55 = Subcategory.create!({ name: "Salsa Dance", category_id: cat6.id })
sub_cat56 = Subcategory.create!({ name: "Swing Dancing", category_id: cat6.id })
sub_cat57 = Subcategory.create!({ name: "Steppers", category_id: cat6.id })
sub_cat58 = Subcategory.create!({ name: "Tango", category_id: cat6.id })
sub_cat59 = Subcategory.create!({ name: "Samba", category_id: cat6.id })
sub_cat60 = Subcategory.create!({ name: "Cabaret", category_id:cat6.id })
sub_cat61 = Subcategory.create!({ name: "Astronomy", category_id: cat7.id })
sub_cat62 = Subcategory.create!({ name: "College Students", category_id: cat7.id })
sub_cat63 = Subcategory.create!({ name: "Debate", category_id: cat7.id })
sub_cat64 = Subcategory.create!({ name: "Ethics", category_id: cat7.id })
sub_cat65 = Subcategory.create!({ name: "Sexual Education", category_id: cat7.id })
sub_cat66 = Subcategory.create!({ name: "Rhetorik", category_id: cat7.id })
sub_cat67 = Subcategory.create!({ name: "Space Exploration", category_id: cat7.id })
sub_cat68 = Subcategory.create!({ name: "Critical Thinking", category_id: cat7.id })
sub_cat69 = Subcategory.create!({ name: "Physics", category_id: cat7.id })
sub_cat70 = Subcategory.create!({ name: "Teachers", category_id:cat7.id })
sub_cat71 = Subcategory.create!({ name: "Safe Skin Care & Cosmetics", category_id: cat8.id })
sub_cat72 = Subcategory.create!({ name: "Weddings", category_id: cat8.id })
sub_cat73 = Subcategory.create!({ name: "Makeup", category_id: cat8.id })
sub_cat74 = Subcategory.create!({ name: "Fasion Entrepreneurs", category_id: cat8.id })
sub_cat75 = Subcategory.create!({ name: "Kinky Hair", category_id: cat8.id })
sub_cat76 = Subcategory.create!({ name: "Natural Hair", category_id: cat8.id })
sub_cat77 = Subcategory.create!({ name: "Fashion and Style", category_id: cat8.id })
sub_cat78 = Subcategory.create!({ name: "Caring for Black Hair", category_id: cat8.id })
sub_cat79 = Subcategory.create!({ name: "Beauty Industry", category_id: cat8.id })
sub_cat80 = Subcategory.create!({ name: "10K", category_id:cat9.id })
sub_cat81 = Subcategory.create!({ name: "Boxing", category_id: cat9.id })
sub_cat82 = Subcategory.create!({ name: "Indoor Fitness Bootcamp", category_id: cat9.id })
sub_cat83 = Subcategory.create!({ name: "Leisure Walking", category_id: cat9.id })
sub_cat84 = Subcategory.create!({ name: "Roller Skating", category_id: cat9.id })
sub_cat85 = Subcategory.create!({ name: "Swimming", category_id: cat9.id })
sub_cat86 = Subcategory.create!({ name: "Marathon", category_id: cat9.id })
sub_cat87 = Subcategory.create!({ name: "Aerobics", category_id: cat9.id })
sub_cat88 = Subcategory.create!({ name: "Zumba", category_id: cat9.id })
sub_cat89 = Subcategory.create!({ name: "Cycling for Fitness", category_id: cat9.id })
sub_cat90 = Subcategory.create!({ name: "Parkour", category_id:cat9.id })
sub_cat91 = Subcategory.create!({ name: "Afternoon Tea", category_id: cat10.id })
sub_cat92 = Subcategory.create!({ name: "Beer", category_id: cat10.id })
sub_cat93 = Subcategory.create!({ name: "Brunch", category_id: cat10.id })
sub_cat94 = Subcategory.create!({ name: "Healthy Eating", category_id: cat10.id })
sub_cat95 = Subcategory.create!({ name: "Cooking", category_id:cat10.id })
sub_cat96 = Subcategory.create!({ name: "Potluck", category_id: cat10.id })
sub_cat97 = Subcategory.create!({ name: "Gluten Sensitive", category_id: cat10.id })
sub_cat98 = Subcategory.create!({ name: "Wine and Cheese", category_id: cat10.id })
sub_cat99 = Subcategory.create!({ name: "Receipes", category_id: cat10.id })
sub_cat100 = Subcategory.create!({ name: "Vegan", category_id: cat10.id })
sub_cat101 = Subcategory.create!({ name: "Sustainable Food", category_id: cat10.id })
sub_cat102 = Subcategory.create!({ name: "Bridge", category_id: cat11.id })
sub_cat103 = Subcategory.create!({ name: "Chess", category_id: cat11.id })
sub_cat104 = Subcategory.create!({ name: "Poker Home Games", category_id: cat11.id })
sub_cat105 = Subcategory.create!({ name: "Music Trivia", category_id:cat11.id })
sub_cat106 = Subcategory.create!({ name: "Scrabble", category_id: cat11.id })
sub_cat107 = Subcategory.create!({ name: "Pool", category_id: cat11.id })
sub_cat108 = Subcategory.create!({ name: "Mah Jong", category_id: cat11.id })
sub_cat109 = Subcategory.create!({ name: "Sword Fighting", category_id: cat11.id })
sub_cat110 = Subcategory.create!({ name: "Roleplaying Games (RPGs)", category_id: cat11.id })
sub_cat111 = Subcategory.create!({ name: "Dungeons & Dragons 4.0", category_id: cat11.id })
sub_cat112 = Subcategory.create!({ name: "Energy", category_id: cat12.id })
sub_cat113 = Subcategory.create!({ name: "Anger Management", category_id: cat12.id })
sub_cat114 = Subcategory.create!({ name: "Kundalini Yoga", category_id: cat12.id })
sub_cat115 = Subcategory.create!({ name: "Meditation", category_id:cat12.id })
sub_cat116 = Subcategory.create!({ name: "Herbalism", category_id: cat12.id })
sub_cat117 = Subcategory.create!({ name: "Conscious Living", category_id: cat12.id })
sub_cat118 = Subcategory.create!({ name: "Medical Marijuana", category_id: cat12.id })
sub_cat119 = Subcategory.create!({ name: "Natural Organic Living", category_id: cat12.id })
sub_cat120 = Subcategory.create!({ name: "Emotional Wellbeing", category_id: cat12.id })
sub_cat121 = Subcategory.create!({ name: "Self-Awareness", category_id: cat12.id })
sub_cat122 = Subcategory.create!({ name: "Adult Paper Craft Classes", category_id: cat13.id })
sub_cat123 = Subcategory.create!({ name: "Bargain Shopping", category_id: cat13.id })
sub_cat124 = Subcategory.create!({ name: "Jewelry Making", category_id: cat13.id })
sub_cat125 = Subcategory.create!({ name: "Home Decorating", category_id:cat13.id })
sub_cat126 = Subcategory.create!({ name: "Quilting", category_id: cat13.id })
sub_cat127 = Subcategory.create!({ name: "All things Vintage", category_id: cat13.id })
sub_cat128 = Subcategory.create!({ name: "DIY (Do It Yourself)", category_id: cat13.id })
sub_cat129 = Subcategory.create!({ name: "Antique Collecting", category_id: cat13.id })
sub_cat130 = Subcategory.create!({ name: "Origami", category_id: cat13.id })
sub_cat131 = Subcategory.create!({ name: "Thrift Shoppers", category_id: cat13.id })
sub_cat132 = Subcategory.create!({ name: "Bisexual", category_id: cat14.id })
sub_cat133 = Subcategory.create!({ name: "Friends & Supporters of LGBT/GLBT", category_id: cat14.id })
sub_cat134 = Subcategory.create!({ name: "Gay Professionals", category_id: cat14.id })
sub_cat135 = Subcategory.create!({ name: "Lesbian Friends", category_id:cat14.id })
sub_cat136 = Subcategory.create!({ name: "Professional Lesbian Women", category_id: cat14.id })
sub_cat137 = Subcategory.create!({ name: "Transgender Women", category_id: cat14.id })
sub_cat138 = Subcategory.create!({ name: "Transgender", category_id: cat14.id })
sub_cat139 = Subcategory.create!({ name: "Lesbian Moms", category_id: cat14.id })
sub_cat140 = Subcategory.create!({ name: "Bisexual Men", category_id: cat14.id })
sub_cat141 = Subcategory.create!({ name: "Gay Singles", category_id: cat14.id })
sub_cat142 = Subcategory.create!({ name: "African Americans", category_id: cat15.id })
sub_cat143 = Subcategory.create!({ name: "Arabic Culture", category_id: cat15.id })
sub_cat144 = Subcategory.create!({ name: "Asian Americans", category_id: cat15.id })
sub_cat145 = Subcategory.create!({ name: "Africans", category_id:cat15.id })
sub_cat146 = Subcategory.create!({ name: "Japanese Culture", category_id: cat15.id })
sub_cat147 = Subcategory.create!({ name: "Multicultural", category_id: cat15.id })
sub_cat148 = Subcategory.create!({ name: "Latinas", category_id: cat15.id })
sub_cat149 = Subcategory.create!({ name: "Multiracial", category_id: cat15.id })
sub_cat150 = Subcategory.create!({ name: "Culture Exchange", category_id: cat15.id })
sub_cat151 = Subcategory.create!({ name: "Native Americans", category_id: cat15.id })
sub_cat152 = Subcategory.create!({ name: "Alternative Lifestyles", category_id: cat17.id })
sub_cat153 = Subcategory.create!({ name: "Frugal Living", category_id: cat16.id })
sub_cat154 = Subcategory.create!({ name: "Hippie", category_id: cat16.id })
sub_cat155 = Subcategory.create!({ name: "Naturism", category_id:cat16.id })
sub_cat156 = Subcategory.create!({ name: "Burning Man", category_id: cat16.id })
sub_cat157 = Subcategory.create!({ name: "Childfree", category_id: cat16.id })
sub_cat158 = Subcategory.create!({ name: "Greek Culture", category_id: cat16.id })
sub_cat159 = Subcategory.create!({ name: "Seniors", category_id: cat16.id })
sub_cat160 = Subcategory.create!({ name: "Goth", category_id: cat16.id })
sub_cat161 = Subcategory.create!({ name: "Cross Dressing", category_id: cat16.id })
sub_cat162 = Subcategory.create!({ name: "National Politics", category_id: cat17.id })
sub_cat163 = Subcategory.create!({ name: "Political Activism", category_id: cat17.id })
sub_cat164 = Subcategory.create!({ name: "Human Rights", category_id: cat17.id })
sub_cat165 = Subcategory.create!({ name: "Eqaulity", category_id:cat17.id })
sub_cat166 = Subcategory.create!({ name: "Republican Liberty Caucus", category_id: cat17.id })
sub_cat167 = Subcategory.create!({ name: "Conspiracy", category_id: cat17.id })
sub_cat168 = Subcategory.create!({ name: "Free Market Economics", category_id: cat17.id })
sub_cat169 = Subcategory.create!({ name: "Seniors", category_id: cat17.id })
sub_cat170 = Subcategory.create!({ name: "Connettività Pubblica Gratuita", category_id: cat17.id })
sub_cat171 = Subcategory.create!({ name: "Young Republicans", category_id: cat17.id })
sub_cat172 = Subcategory.create!({ name: "Animation", category_id: cat18.id })
sub_cat173 = Subcategory.create!({ name: "Documentary Films", category_id: cat18.id })
sub_cat174 = Subcategory.create!({ name: "Arthouse", category_id: cat18.id })
sub_cat175 = Subcategory.create!({ name: "Japanese Films", category_id:cat18.id })
sub_cat176 = Subcategory.create!({ name: "Cult Films", category_id: cat18.id })
sub_cat177 = Subcategory.create!({ name: "Film and Video Production", category_id: cat18.id })
sub_cat178 = Subcategory.create!({ name: "Horror Films", category_id: cat18.id })
sub_cat179 = Subcategory.create!({ name: "Bollywood Films", category_id: cat18.id })
sub_cat180 = Subcategory.create!({ name: "Videography", category_id: cat18.id })
sub_cat181 = Subcategory.create!({ name: "Indie Films", category_id: cat18.id })
sub_cat182 = Subcategory.create!({ name: "Blues", category_id: cat19.id })
sub_cat183 = Subcategory.create!({ name: "Jam Sessions", category_id: cat19.id })
sub_cat184 = Subcategory.create!({ name: "Reggae", category_id: cat19.id })
sub_cat185 = Subcategory.create!({ name: "Songwriting", category_id:cat19.id })
sub_cat186 = Subcategory.create!({ name: "Heavy Metal", category_id: cat19.id })
sub_cat187 = Subcategory.create!({ name: "Opera", category_id: cat19.id })
sub_cat188 = Subcategory.create!({ name: "Latin Music", category_id: cat19.id })
sub_cat189 = Subcategory.create!({ name: "Jazz", category_id: cat19.id })
sub_cat190 = Subcategory.create!({ name: "African Music", category_id: cat19.id })
sub_cat191 = Subcategory.create!({ name: "Singing for Beginners", category_id: cat19.id })
sub_cat192 = Subcategory.create!({ name: "A Course in Miracles", category_id: cat20.id })
sub_cat193 = Subcategory.create!({ name: "Astrology", category_id: cat20.id })
sub_cat194 = Subcategory.create!({ name: "Chakra Clearing", category_id: cat20.id })
sub_cat195 = Subcategory.create!({ name: "Energy Healing", category_id:cat20.id })
sub_cat196 = Subcategory.create!({ name: "Feng Shui", category_id: cat20.id })
sub_cat197 = Subcategory.create!({ name: "Kabbalah", category_id: cat20.id })
sub_cat198 = Subcategory.create!({ name: "Native American Spirituality", category_id: cat20.id })
sub_cat199 = Subcategory.create!({ name: "Osho", category_id: cat20.id })
sub_cat200 = Subcategory.create!({ name: "Shamanism", category_id: cat20.id })
sub_cat201 = Subcategory.create!({ name: "Past Lives", category_id: cat20.id })



#LOCATIONS
Location.destroy_all
oakland = Location.create!({ city: "Oakland", state: "California" })
sanFrancisco = Location.create!({ city: "San Francisco", state: "California" })
losAngeles = Location.create!({ city: "Los Angeles", state: "California" })
newYork = Location.create!({ city: "New York", state: "New York" })
houston = Location.create!({ city: "Houston", state: "Texas" })
atlanta = Location.create!({ city: "Atlanta", state: "Georgia" })
chicago = Location.create!({ city: "Chicago", state: "Illinois" })
detroit = Location.create!({ city: "Detroit", state: "Michigan" })
charlotte = Location.create!({ city: "Charlotte", state: "North Carolina" })
miami = Location.create!({ city: "Miami", state: "Florida" })
newOrleans = Location.create!({ city: "New Orleans", state: "Louisiana" })
philly = Location.create!({ city: "Philadelphia", state: "Pennsylvania" })



# GROUPS:
Group.destroy_all
group1 = Group.create!({ 
    name: "Art in Public Spaces", 
    description: "Art is everywhere. Let's take a moment to really see it. If you're interested in exploring NYC's spaces through playful art engagement - join us! From drawing and modeling to meditation and games, we hope to build a community of Art-Seers and Art-Doers. A variety of venues will serve as our lab and playground. Open minds. Open hearts. All art skill levels welcome.", 
    subcategory_id: sub_cat3.id, 
    location_id: newOrleans.id, 
    creator_id: user20.id
})
group2 = Group.create!({ 
    name: "Oakland Queer + Trans Open Mic", 
    description: "chill group", 
    subcategory_id: sub_cat9.id, 
    location_id: oakland.id, 
    creator_id: user11.id 
})
group3 = Group.create!({ 
    name: "Bay Area Film Fans", 
    description: "coool group", 
    subcategory_id: sub_cat181.id, 
    location_id: oakland.id, 
    creator_id: user11.id
})
group4 = Group.create!({ 
    name: "Understanding Modern and Contemporary Art" , 
    description: "This is a group for anyone interested in learning more about Modern and Contemporary Art. We will organize art history lectures, visits to museums and galleries, and other fun events in San Francisco and the Bay Area!" , 
    subcategory_id: sub_cat4.id, 
    location_id: oakland.id, 
    creator_id: user1.id 
})
group5 = Group.create!({ 
    name: "Earthfire Arts", 
    description: "coool group", 
    subcategory_id: sub_cat6.id, 
    location_id: newYork.id, 
    creator_id: user14.id
})
group6 = Group.create!({ 
    name: "Art Tribe", 
    description: "We are Art Tribe. Poets, Artists, Legends, Lovers, Sages, Wizards. Looking forward to seeing you soon!", 
    subcategory_id: sub_cat1.id, 
    location_id: newYork.id, 
    creator_id: user9.id 
})
group7 = Group.create!({ 
    name: "Arts Tech Philadelphia", 
    description: "We aim to connect innovators in the field of arts, culture, and technology. Our link-ups are designed to explore the ways in which social media and technology can help bring arts and culture to the masses. \"Democratizing\" the arts has been a long-standing goal in the art world, and no medium makes it more feasible than the web. The purpose of this link-up is to bring together those working at the intersection of arts and technology to share ideas, strategies, successes, challenges and failures, and to explore the following questions: How can the new technology available help raise awareness about the arts and enrich the audience experience? -How can cultural institutions interact and engage with each other and their audience in meaningful ways? - What can they learn from their audience and how can they use this knowledge to improve the way in which they present their content? What kind of collaborations are happening at the intersection of arts and tech? - What are the possibilities of arts and tech? - As well as countless others that we hope to uncover at future link-ups!", 
    subcategory_id: sub_cat4.id, 
    location_id: philly.id, 
    creator_id: user4.id 
})
group8 = Group.create!({ 
    name: "Pottery Painting Royal Oak", 
    description: "Meet others interested in kiln fired arts, explore your inner artist, learn and share techniques or just to relax and paint. This group is for all those who are looking for a place to paint, learn, and enjoy pottery and clay art, etc. Experienced or not, all are welcome to join!", 
    subcategory_id: sub_cat6.id, 
    location_id: detroit.id, 
    creator_id: user23.id
})
group9 = Group.create!({ 
    name: "Improv, Acting, & Comedy Workshops", 
    description: "This group is for everyone who wants to improve their skills in: Improv, Communication, Acting, Comedy, If time permits, in different sessions, we may go into other important life-skills such as: Storytelling, Video Recording, +other concepts in the field of self development. Constructive feedback is always welcome in this group. We form this group to help each other succeed.", 
    subcategory_id: sub_cat5.id, 
    location_id: detroit.id, 
    creator_id: user100.id 
})
group10 = Group.create!({ 
    name: "Sunday Sketchers-Houston", 
    description: "Sunday Sketchers are folks who like to get together for experiences in sketching. We believe it's important to keep our \"eye\" sharp so as to enhance our art. We like to make new artist friends to network and support each other. During these days of the Covid19 epidemic we are meeting online using Zoom app. The app is free and our login is 628 954 736.", 
    subcategory_id: sub_cat4.id, 
    location_id: houston.id, 
    creator_id: user102.id 
})
group11 = Group.create!({ 
    name: "Houston Queer Book Club LinkUp Group", 
    description: "Welcome book lover! We will be meeting every month to discuss queer fiction and non-fiction. This is a space that welcomes respectful dialogue, be it a formal dive into the book’s themes or a more informal conversation about passages we enjoyed. All are welcome, LGBTQA + or otherwise. (Virtual for the time being) Book suggestions welcome.", 
    subcategory_id: sub_cat11.id, 
    location_id: houston.id, 
    creator_id: user89.id
})
group12 = Group.create!({ 
    name: "Houston African American Authors LinkUp Group", 
    description: "This is a group for anyone interested in reading and discussing books written by African-American authors. All levels of book readers are welcome. I started this group to meet other avid enthusiasts of African-American literature. Looking forward to exploring genres with everybody.", 
    subcategory_id: sub_cat10.id, 
    location_id: houston.id, 
    creator_id: user15.id, 
})
group13 = Group.create!({ 
    name: "ATL Book Love", 
    description: "We are a book club for folks who actually want to discuss the book! Open to anyone, but we will meet in the East Lake, Kirkwood, Oakhurst area. We'll read books that are in paperback already but pretty new (last 15 years-ish), choosing from book award winners and nominees and books that highlight diverse perspectives. We will vote on books nominated by members to read at the end of each meeting. Looking forward to reading with folks!", 
    subcategory_id: sub_cat12.id, 
    location_id: atlanta.id, 
    creator_id: user93.id 
})
group14 = Group.create!({ 
    name: "Sip and Read Book Club", 
    description: "Hello Radiant Readers! This is a group for mature ladies (30 and older) who love fictional books. We will meet once a month on Saturdays around Brunch time in the Kennesaw area. This is a great opportunity to meet new amazing ladies, enjoy unforgettable conversations and maybe a cup of coffee or even something bubbly. The only thing I ask of the group is that we have fun, show respect to others and most importantly find some amazing books to discuss! Our meeting space is limited so please make sure if you select a seat you plan to join us. During our meetings every month we will discuss the book of that month and make book suggestions for the following month. Once we have narrowed it down to 3-4 books we will then vote for the next month. Majority rules. Our Group Motto: IN THIS GROUP: We are positive, productive and full of life. We drink coffee and laugh often. Reading is expected and speaking up is encouraged. We believe in opening our minds and finishing our books. We strive for building a friendly community and French toast is a must have. We read harder today than we did yesterday because we know the only bad day is the one where we didn't read! Also please feel free to follow us on Instagram @sip_and_read_book_club", 
    subcategory_id: sub_cat14.id, 
    location_id: atlanta.id, 
    creator_id: user98.id
})
group15 = Group.create!({ 
    name: "Atlanta Mindful Moms Book Club", 
    description: "Connect, share and learn from moms who are interested in mindful parenting. Join to meet other moms and recommend your favorite parenting books or books that have helped you be a better parent, while sharing and learning from each other’s perspectives, tips or best practices.", 
    subcategory_id: sub_cat16.id, 
    location_id: atlanta.id, 
    creator_id: user74.id 
})
group16 = Group.create!({ 
    name: "Cocoa Risers Reading", 
    description: "\"Cocoa Risers Reading\" launched in 2016 and has hosted nearly 40 book discussions! We've even participated in a few books-to-movie screenings and author events. We've gone back to being a FREE book club. Please make sure to update your RSVP for events so I can provide headcount for the restaurants we visit. This club is for people who would like to read books by black authors. We will work from lists of top books and group member suggestions. We may revisit some old classics or read them for the first time. We will delve into both fiction and non-fiction, newer authors and literary icons. If you're new to the group, here are some of our favorites: \"Homegoing\" by Yaa Gyasi. ***\"Chocolate Souffle\" by Trish Ahjel (shameless plug for my own book! lol!). ***Check out my book page on my website: https://honeybutterflyz.com/books. \"Kindred\" by Octavia Butler. \"Born a Crime - Stories of a South African Childhood\" by Trevor Noah. \"The Perfect Find\" by Tia Williams. \"An American Marriage\" by Tayari Jones. We will read one book per month and discuss over Sunday brunch at alternating locations. Don't worry if you can't attend every month - just do the best you can. If we select a longer title, we may take two months instead of one. I coined the term \"Cocoa Riser\" to describe a fan of black literature who acknowledges s/he is sexy, funny, smart and so much more, and also wants to improve the global condition by working in community to reach common goals for our families, our neighborhoods and ourselves. Let's not just read, let's \"RISE!\" Here are a few lists to give you some ideas: http://www.listchallenges.com/100-must-read-african-american-books/checklist/2 http://www.goodreads.com/shelf/show/top-50-black-authors http://www.goodreads.com/shelf/show/caribbean-authors I look forward to meeting everyone and discussing some great books! Trish", 
    subcategory_id: sub_cat17.id, 
    location_id: atlanta.id, 
    creator_id: user74.id 
})
group17 = Group.create!({ 
    name: "Classics & Culture Link-Up", 
    description: "A brand new Link-Up! This link up is for anyone who loves cultural activities, reading the classics (or wants to begin reading them), and longs to join a friendly, fun, and nourishing community where they can read, discuss, and enjoy the finer things in life —on a budget and without the “ivory-tower” vibe. 😁 This group is for single or married adults ages 21 and up. We get together once a month to discuss a classic work of literature or philosophy, selected by the group, and share food and drinks (potluck style) based on the cuisine theme for the month. In addition to our monthly gathering, we will post other opportunities for hanging out centered around books, culture, ideas, and the arts. As a group, we do not hold to any philosophical or religious tradition, but rather seek to maintain an ecumenical and generous spirit where we give space for each person to be themselves. The Monthly Gathering: Discussion, books, and food is what this Gathering is all about! Each month we have a different cuisine we explore as a group and try our hand at making. We bring our dishes that we made (or bought 🤷‍♀️) to the Gathering to share. We provide introductory notes for each classic to help us all get into the work more easily. At the end of each read, we will put our ideas in a hat for the next classic work and cuisine theme and then pick at random. We read a variety of classics including literature like Homer, Dickens, and Tolstoy as well as philosophy and other expository works like Cicero, Plato, and Confucius. Any classic is on the table as an option for reading and discussing. We do not limit our book selections to the western canon but prefer to embrace classics from any region of our world. The Hang Outs: Here are some of the additional hangouts you can expect to see scheduled. ~Budget savvy cultural events (free nights at local museums, matinee nights at the opera or ballet, free jazz nights around town, etc. ~Interesting lectures at local universities. (they are usually free) ~Used bookstore outings in and around Charlotte. ~Whatever else seems fun to the group! Check out each event posting for details on what to bring and how to prepare. Once you join this link-up you can join our private Facebook group where we introduce ourselves to the group and enjoy discussion in between Gatherings and Hangouts. Please reach out to Jennifer if you have any questions!", 
    subcategory_id: sub_cat18.id, 
    location_id: charlotte.id, 
    creator_id: user82.id
})
group18 = Group.create!({ 
    name: "Babes, Books, Brunch", 
    description: "This is a book club for women of color to come together in a safe space that fosters self love and encourages sisterhood all while feeding our souls and bellies. Cheers to broadening horizons and having meaningful dialogue!", 
    subcategory_id: sub_cat13.id, 
    location_id: charlotte.id, 
    creator_id: user47.id
})
group19 = Group.create!({ 
    name: "Intersectional Charlotte Feminist Book Club", 
    description: "Welcome the Intersectional Charlotte Feminist Book Club. We are intersectional and we talk feminist, class, and race theory to make sure we are good allies to each other and other feminists.", 
    subcategory_id: sub_cat19.id, 
    location_id: charlotte.id, 
    creator_id: user33.id
})
group20 = Group.create!({ 
    name: "Melanin and Wine", 
    description: "This linkup is for melanated people who love wine! Linkups every Wednesday at Sydney's Martini Bar at 7pm. They have tapas, $10 bottles of wine, and free validated parking", 
    subcategory_id: sub_cat13.id, 
    location_id: charlotte.id, 
    creator_id: user7.id 
})
group21 = Group.create!({ 
    name: "Miami Social Media Marketing and Networking Training Linkup", 
    description: "PLEASE READ: This Linkup group is part of a large network of Linkup groups devoted to Best Practices with Social Media Marketing Strategies and Face to Face Networking. These Linkups are organized", 
    subcategory_id: sub_cat27.id, 
    location_id: miami.id, 
    creator_id: user51.id
})
group22 = Group.create({ 
    name: "The Right Kind Of Black Girl", 
    description: "Are you tired of code-switching? Or feeling like you are alone in white spaces? Or how about working twice as hard as everyone else to prove your worth? If so, this space is for you.

Founded by Shambria Williams, a USC graduate and young professional who grew tired of racist people and people of color who stem from wealthy backgrounds having little to no idea and/or being willfully ignorant of the challenges Black females face in white spaces.

This group was created to provide a safe space for Black female professionals of all shades to vent, mentor, coach, listen, and, most importantly, develop a support system amongst women who share similar experiences.

We will host focus groups, cocktail hours, hang outs, and more. We will also share tips and tricks to deal with micro-aggressions, implicit bias, intersectionality, micro-inequities, and inclusion amongst other things. We hope you will embark on this journey of sisterhood with us in building the right kind of professional Black woman.

* If your membership is approved, there is a requirement to join our GroupMe community.", 
    subcategory_id: sub_cat121.id, 
    location_id: losAngeles.id, 
    creator_id: user31.id 
})
group23 = Group.create({ 
    name: "Awkward Black Tribe", 
    description: "No matter what you're into Awkward Black Tribe has got you. The joy of this group is you no longer have to live a tokenized existence when it comes to your social life. You now have access to over 1,300 other highly eclectic, like-minded black people who are into doing the same things that you're constantly being scrutinized for partaking in.

We all know that there is no such thing as a universal black experience. Our interests are just as diverse as our upbringings. If you're looking for a non judgmental, low anxiety place to share your passions then you've found your tribe. And if you feel like your passion isn't being represented through our events then don't be afraid to pitch me an idea.

Your Awkward Organizer,

Roger Porter", 
    subcategory_id: sub_cat154.id, 
    location_id: oakland.id, 
    creator_id: user86.id
})
group24 = Group.create({ 
    name: "LinkUp Testers", 
    description: "This is a group for people testing the code for the LinkUp website (a clone for the site Meetup). We are currently testing the css for the group show page. We want the tabs' content to have more space between it and the category/\"Related Topics\" section. We also want the the members list to render a max of 15 before creating a see all option that takes to a members component. That was a mouthful! We will have events to engage in the progression of our code!", 
    subcategory_id: sub_cat30.id, 
    location_id: sanFrancisco.id, 
    creator_id: user0.id
})

# group25 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group26 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group27 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group28 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group29 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group31 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group32 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group33 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group34 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group35 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group36 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "",
#     creuseror_id: "" 
# })
# group37 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group38 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group39 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group40 = Group.create({ 
#     name: "Blacks in Technology - SF Bay Area(Official)", 
#     description: "coool group", 
#     subcategory_id: sub_cat, 
#     location_id: "", 
#     creator_id: user 
# })
# group41 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group42 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group43 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group44 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group45 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group46 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group47 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group48 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group49 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group51 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group52 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group53 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group54 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group55 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group56 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group57 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group58 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group59 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group60 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group61 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group62 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group63 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group64 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group65 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group66 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group67 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group68 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group69 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group70 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group71 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group72 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group73 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group74 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group75 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group76 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group77 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group78 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group79 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group80 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group81 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group82 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group83 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group84 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group85 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group86 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group87 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group88 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group89 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group90 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group91 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group92 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group93 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group94 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group95 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group96 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group97 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group98 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group99 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group100 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group101 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group102 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group103 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group104 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group105 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group106 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group107 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group108 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group109 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group110 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })
# group111 = Group.create({ name: "Blacks in Technology - SF Bay Area(Official)", description: "coool group", subcategory_id: sub_cat, location_id: "", creator_id: user })

group1.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/white-dress-color-background.jpg"), filename: "art-in-public-spaces.jpg")
group2.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/open-mic.jpg"), filename: "oakland-queer-trans-open-mic.jpg")
group3.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/film.jpg"), filename: "bay-area-film-fans.jpg")
group4.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/fahamu.jpeg"), filename: "understanding-modern-contemp-art.jpeg")
group5.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/pottery.jpg"), filename: "earthfire-arts.jpg")
group6.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/art-tribe.jpg"), filename: "art-tribe.jpg")
group7.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/arts-tech.png"), filename: "arts-tech-philly.png")
group8.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/pottery-painting.jpg"), filename: "pottery-painting.jpg")
group9.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/workshop.jpg"), filename: "improv-acting-comedy-workshop.jpg")
group10.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/sketch.jpg"), filename: "sunday-sketchers-houston.jpg")
group11.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/reading.jpeg"), filename: "houston-queer-book-club.jpeg")
group12.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/writing.jpeg"), filename: "houston-authors.jpeg")
group13.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/library.jpeg"), filename: "atl-book-love.jpeg")
group14.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/sip-read.jpg"), filename: "sip-and-read.jpg")
group15.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/sulwe.jpeg"), filename: "atl-mindful-moms.jpeg")
group16.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/red-book.jpeg"), filename: "cocoa-risers-reading.jpeg")
group17.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/open-book.jpg"), filename: "classics-culture.jpg")
group18.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/brunch.jpg"), filename: "books-babes-brunch.jpg")
group19.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/womanist.jpeg"), filename: "intersectional-charlotte-feminist-books.jpeg")
group20.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/wine.jpeg"), filename: "melanin-wine.jpeg")
group21.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/social-media.jpg"), filename: "miami-social-media-marketing.jpg")
group22.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/white-background-color-clothes.jpg"), filename: "right-kind-of-black-girl.jpg")
group23.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/awkward.jpg"), filename: "awkward-black-tribe.jpg")
group24.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/testers.jpeg"), filename: "testers.jpeg")



# MEMBERS:
Member.destroy_all
creator1 = Member.create!({ group_id: group1.id, user_id: user20.id })
creator2 = Member.create!({ group_id: group2.id, user_id: user11.id })
creator3 = Member.create!({ group_id: group3.id, user_id: user11.id })
creator4 = Member.create!({ group_id: group4.id, user_id: user1.id})
creator5 = Member.create!({ group_id: group5.id, user_id: user14.id })
creator6 = Member.create!({ group_id: group6.id, user_id: user9.id })
creator7 = Member.create!({ group_id: group7.id, user_id: user4.id })
creator8 = Member.create!({ group_id: group8.id, user_id: user23.id  })
creator9 = Member.create!({ group_id: group9.id, user_id: user100.id  })
creator10 = Member.create!({ group_id: group10.id, user_id: user102.id })
creator11 = Member.create!({ group_id: group11.id, user_id: user89.id })
creator12 = Member.create!({ group_id: group12.id, user_id: user15.id })
creator13 = Member.create!({ group_id: group13.id, user_id: user93.id })
creator14 = Member.create!({ group_id: group14.id, user_id: user98.id })
creator15 = Member.create!({ group_id: group15.id, user_id: user74.id })
creator16 = Member.create!({ group_id: group16.id, user_id: user74.id })
creator17 = Member.create!({ group_id: group17.id, user_id: user82.id })
creator18 = Member.create!({ group_id: group18.id, user_id: user47.id })
creator19 = Member.create!({ group_id: group19.id, user_id: user33.id })
creator20 = Member.create!({ group_id: group20.id, user_id: user7.id })
creator21 = Member.create!({ group_id: group21.id, user_id: user51.id })
creator22 = Member.create!({ group_id: group22.id, user_id: user31.id })
creator23 = Member.create!({ group_id: group23.id, user_id: user86.id })
creator24 = Member.create!({ group_id: group24.id, user_id: user0.id })

member1 = Member.create!({ user_id: user0.id, group_id: group1.id })
member2 = Member.create!({ user_id: user0.id, group_id: group3.id })
member3 = Member.create!({ user_id: user0.id, group_id: group5.id })
member4 = Member.create!({ user_id: user0.id, group_id: group7.id })
member5 = Member.create!({ user_id: user0.id, group_id: group9.id })
member6 = Member.create!({ user_id: user0.id, group_id: group11.id })
member7 = Member.create!({ user_id: user1.id, group_id: group2.id })
member8 = Member.create!({ user_id: user1.id, group_id: group5.id })
member9 = Member.create!({ user_id: user1.id, group_id: group6.id })
member10 = Member.create!({ user_id: user1.id, group_id: group8.id })
member11 = Member.create!({ user_id: user1.id, group_id: group10.id })
member12 = Member.create!({ user_id: user1.id, group_id: group12.id })
member13 = Member.create!({ user_id: user2.id, group_id: group1.id })
member14 = Member.create!({ user_id: user2.id, group_id: group3.id })
member15 = Member.create!({ user_id: user2.id, group_id: group5.id })
member16 = Member.create!({ user_id: user2.id, group_id: group7.id })
member17 = Member.create!({ user_id: user2.id, group_id: group9.id })
member18 = Member.create!({ user_id: user2.id, group_id: group11.id })
member19 = Member.create!({ user_id: user2.id, group_id: group13.id })
member20 = Member.create!({ user_id: user3.id, group_id: group2.id })
member21 = Member.create!({ user_id: user3.id, group_id: group4.id })
member22 = Member.create!({ user_id: user3.id, group_id: group6.id })
member23 = Member.create!({ user_id: user3.id, group_id: group8.id })
member24 = Member.create!({ user_id: user3.id, group_id: group10.id })
member25 = Member.create!({ user_id: user3.id, group_id: group12.id })
member26 = Member.create!({ user_id: user3.id, group_id: group14.id })
member27 = Member.create!({ user_id: user4.id, group_id: group1.id })
member28 = Member.create!({ user_id: user4.id, group_id: group3.id })
member29 = Member.create!({ user_id: user4.id, group_id: group5.id })
member30 = Member.create!({ user_id: user4.id, group_id: group8.id })
member31 = Member.create!({ user_id: user4.id, group_id: group9.id })
member32 = Member.create!({ user_id: user4.id, group_id: group11.id })
member33 = Member.create!({ user_id: user4.id, group_id: group13.id })
member34 = Member.create!({ user_id: user5.id, group_id: group2.id })
member35 = Member.create!({ user_id: user5.id, group_id: group4.id })
member36 = Member.create!({ user_id: user5.id, group_id: group6.id })
member37 = Member.create!({ user_id: user5.id, group_id: group8.id })
member38 = Member.create!({ user_id: user5.id, group_id: group10.id })
member39 = Member.create!({ user_id: user5.id, group_id: group12.id })
member40 = Member.create!({ user_id: user6.id, group_id: group1.id })
member41 = Member.create!({ user_id: user6.id, group_id: group3.id })
member42 = Member.create!({ user_id: user6.id, group_id: group5.id })
member43 = Member.create!({ user_id: user6.id, group_id: group7.id })
member44 = Member.create!({ user_id: user6.id, group_id: group9.id })
member45 = Member.create!({ user_id: user6.id, group_id: group11.id })
member46 = Member.create!({ user_id: user7.id, group_id: group2.id })
member47 = Member.create!({ user_id: user7.id, group_id: group6.id })
member48 = Member.create!({ user_id: user7.id, group_id: group10.id })
member49 = Member.create!({ user_id: user7.id, group_id: group14.id })
member50 = Member.create!({ user_id: user7.id, group_id: group19.id })
member51 = Member.create!({ user_id: user7.id, group_id: group22.id })
member52 = Member.create!({ user_id: user7.id, group_id: group1.id })
member53 = Member.create!({ user_id: user8.id, group_id: group1.id })
member54 = Member.create!({ user_id: user8.id, group_id: group3.id })
member55 = Member.create!({ user_id: user8.id, group_id: group6.id })
member56 = Member.create!({ user_id: user8.id, group_id: group9.id })
member57 = Member.create!({ user_id: user8.id, group_id: group12.id })
member58 = Member.create!({ user_id: user8.id, group_id: group15.id })
member59 = Member.create!({ user_id: user8.id, group_id: group18.id })
member60 = Member.create!({ user_id: user9.id, group_id: group1.id })
member61 = Member.create!({ user_id: user9.id, group_id: group16.id })
member62 = Member.create!({ user_id: user9.id, group_id: group10.id })
member63 = Member.create!({ user_id: user9.id, group_id: group15.id })
member64 = Member.create!({ user_id: user9.id, group_id: group8.id })
member65 = Member.create!({ user_id: user9.id, group_id: group3.id })
member66 = Member.create!({ user_id: user9.id, group_id: group13.id })
member67 = Member.create!({ user_id: user0.id, group_id: group13.id })
member68 = Member.create!({ user_id: user23.id, group_id: group24.id })
member69 = Member.create!({ user_id: user37.id, group_id: group24.id })
member70 = Member.create!({ user_id: user62.id, group_id: group24.id })
member71 = Member.create!({ user_id: user89.id, group_id: group24.id })
member72 = Member.create!({ user_id: user91.id, group_id: group24.id })
member73 = Member.create!({ user_id: user45.id, group_id: group24.id })
member74 = Member.create!({ user_id: user20.id, group_id: group24.id })
member75 = Member.create!({ user_id: user31.id, group_id: group24.id })
member76 = Member.create!({ user_id: user29.id, group_id: group24.id })
member77 = Member.create!({ user_id: user52.id, group_id: group24.id })
member78 = Member.create!({ user_id: user19.id, group_id: group24.id })
member79 = Member.create!({ user_id: user27.id, group_id: group24.id })
member80 = Member.create!({ user_id: user34.id, group_id: group24.id })
member81 = Member.create!({ user_id: user41.id, group_id: group24.id })
member82 = Member.create!({ user_id: user36.id, group_id: group24.id })
member83 = Member.create!({ group_id: group21.id, user_id: user0.id })
member84 = Member.create!({ group_id: group24.id, user_id: user26.id })
member85 = Member.create!({ group_id: group24.id, user_id: user42.id })
member86 = Member.create!({ group_id: group24.id, user_id: user104.id })
member87 = Member.create!({ group_id: group24.id, user_id: user54.id })
member88 = Member.create!({ group_id: group24.id, user_id: user39.id })
member89 = Member.create!({ group_id: group24.id, user_id: user22.id })
member90 = Member.create!({ group_id: group24.id, user_id: user92.id })
member91 = Member.create!({ group_id: group24.id, user_id: user12.id })
member92 = Member.create!({ group_id: group24.id, user_id: user64.id })
member93 = Member.create!({ group_id: group24.id, user_id: user103.id })
member94 = Member.create!({ group_id: group24.id, user_id: user83.id })
member95 = Member.create!({ group_id: group24.id, user_id: user77.id })
member96 = Member.create!({ group_id: group24.id, user_id: user46.id })
member97 = Member.create!({ group_id: group24.id, user_id: user28.id })
member98 = Member.create!({ group_id: group24.id, user_id: user18.id })
member99 = Member.create!({ group_id: group24.id, user_id: user72.id })
member100 = Member.create!({ group_id: group24.id, user_id: user51.id })
member101 = Member.create!({ group_id: group24.id, user_id: user59.id })
member102 = Member.create!({ group_id: group24.id, user_id: user49.id })
member103 = Member.create!({ group_id: group24.id, user_id: user11.id })
member104 = Member.create!({ group_id: group24.id, user_id: user25.id })
member105 = Member.create!({ group_id: group24.id, user_id: user33.id })
member106 = Member.create!({ group_id: group24.id, user_id: user44.id })
member107 = Member.create!({ group_id: group24.id, user_id: user55.id })
member108 = Member.create!({ group_id: group24.id, user_id: user66.id })
member109 = Member.create!({ group_id: group24.id, user_id: user78.id })
member110 = Member.create!({ group_id: group24.id, user_id: user88.id })
member111 = Member.create!({ group_id: group24.id, user_id: user99.id })
member112 = Member.create!({ group_id: group24.id, user_id: user97.id })
member113 = Member.create!({ group_id: group24.id, user_id: user69.id })
member114 = Member.create!({ group_id: group24.id, user_id: user65.id })
member115 = Member.create!({ group_id: group24.id, user_id: user30.id })
member116 = Member.create!({ group_id: group24.id, user_id: user85.id })
member117 = Member.create!({ group_id: group24.id, user_id: user58.id })
member118 = Member.create!({ group_id: group24.id, user_id: user21.id })



# # EVENTS:
Event.destroy_all
event1 = Event.create!({
    name: "Understanding Black Fandoms", 
    group_id: group4.id, 
    date_time: DateTime.strptime("09/14/2020 8:00", "%m/%d/%Y %H:%M"),
    description: "Purchase tickets here! https://www.crowdcast.io/e/looking-black
Ticket prices go up the evening of the event so get yours soon.

Often, when we talk about fandom, it’s usually white folks talking about the things they love, as if their fan objects stand in for the universality of all fandom. But what about Black fandoms and the things we love? Dr. Alfred L. Martin Jr., Assistant Professor at the University of Iowa, will delve into Black fandoms centered around Black Panther, Tyler Perry’s media output, Misty Copeland, the cult classic The Wiz and the perennial sitcom The Golden Girls. Everyone’s invited to explore how Black fandom operates and core discourses around it during this fascinating talk.
******************************************
The Lecture Bar hosts expert scholars and researchers in their fields. All presenters are paid an honorarium that respects their time and expertise, so a modest ticket cost is incurred.

*******************************************
Can't make the event date? All ticket-holders receive access to replay the program.",
    location_id: losAngeles.id
})

event2 = Event.create!({
    name: "Black Excellence In Tech", 
    group_id: group23.id, 
    date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
    description: "Join Flatiron School, in partnership with Blacks In Technology Foundation, for an event featuring successful black professionals in tech, all from different industries, backgrounds and experiences.

Panelists will address:
- Their introduction into technology
- Their motivation for pursuing a career in tech
- How this pivotal time in society will affect black people in the tech industry
- Connecting with people of color within the tech industry
- How to build a sustainable career in an industry where you are one of the few persons of color

Hoping to break into tech or looking for your next opportunity? Bring all of your questions and get ready to be inspired from the source.

We welcome people from all ethnicities and races to attend this event, as well as people of all technical backgrounds; including newbies thinking about breaking into tech to professionals with flourishing careers",
    location_id: oakland.id
})

event3 = Event.create!({
    name: "Black Lives Matter Discussions", 
    group_id: group12.id, 
    date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
    description: "Let's have an open discussion on Black Lives Matter—the Civil Rights Movement of our times—both on a macro and micro scale.
Our 60 minutes Journaling Sessions will focus on:
1. Past: Your Personal Experience in Racial/Social Injustices & Justices
2. Present: Resources on the progressions and regressions of civil society.
3. Future: What are your hopes, your dreams, your aspirations for yourself, your family, friends, and society in the future?
#differentiate, but don't segregate.
We are inclusive, compassionate, and diverse.
We aim to embrace both the tragedy and the divine comedy of the individual life story, also known as The Love Story.",
    location_id: houston.id
})

event4 = Event.create!({
    name: "Fix CSS For Tab Content - Event Show Page", 
    group_id: group24.id, 
    date_time: DateTime.strptime("10/03/2020 21:50", "%m/%d/%Y %H:%M"),
    description: "When the list is at a certain length it gets too long for its section and cuts off. Maybe a min-height property on it and/or its container and have it fit-content? I feel like I probably already have something like that so will have to hunt for it.",
    location_id: sanFrancisco.id
})

event5 = Event.create!({
    name: "Fix Group Show Member List", 
    group_id: group24.id, 
    date_time: DateTime.strptime("10/03/2020 22:30", "%m/%d/%Y %H:%M"),
    description: "I want there to be a max of 15 members shown in the list component before a see all button/option is created... See all takes user to the members index to see every member in the group... similar to see all for attendees.",
    location_id: sanFrancisco.id
})

event6 = Event.create!({
    name: "Fix Speed of Entity Forms", 
    group_id: group24.id, 
    date_time: DateTime.strptime("10/14/2020 14:56", "%m/%d/%Y %H:%M"),
    description: "Entity form crashes Sami's computer and makes it freeze up. It runs incredibly slow for our dev team. Lets go ahead and figure out what is slowing this down and how to fix it! All are welcome to go on this debugging mission!",
    location_id: oakland.id
})

event7 = Event.create!({
    name: "Finish Website Nav Search Bar", 
    group_id: group24.id, 
    date_time: DateTime.strptime("10/14/2020 0:30", "%m/%d/%Y %H:%M"),
    description: "Join us for a night of search logic and functionality! The search should go through the backend rather than just be in the front. Also in need of some significant styling! All are welcome for this coding session full of lavendar candles, decaf chai tea, and the wonderful sounds of Neo-Soul (including Maxwell, Erykah Badu, Jill Scott, and D'Angelo)",
    location_id: oakland.id
})

event8 = Event.create!({
    name: "Fix Text Alignment of Pink Buttons Throughout Site", 
    group_id: group24.id, 
    date_time: DateTime.strptime("10/18/2020 13:30", "%m/%d/%Y %H:%M"),
    description: "Pink buttons throughout the site render to where the text's vertical alignment is at the top, rather than the center. Might be an issue with just Sami's laptop as I haven't seen it elsewhere, but lets see if we can fix it anyways! This event will take place outside in the sun, so our members can get some Vitamin D for a change.",
    location_id: oakland.id
})

event9 = Event.create!({
    name: "Add a Search Bar for the logged in Landing Page", 
    group_id: group24.id, 
    date_time: DateTime.strptime("10/19/2020 19:00", "%m/%d/%Y %H:%M"),
    description: "When logged in, we decided to render group/event indexes. It would be great for the user to be able to search through the indexes by location and/or name! This will simply be a frontend search since the index should already have all of our groups and events in the state. Join us for some exploration of the JavaScript built in filter method accompanied by conversation igniting podcasts",
    location_id: oakland.id
})

event10 = Event.create!({
    name: "Integrate AWS Logic", 
    group_id: group24.id, 
    date_time: DateTime.strptime("10/20/2020 0:00", "%m/%d/%Y %H:%M"),
    description: "Our site just has repeated stock photos at the moment. We would love to allow the user to upload their own photos for their groups, events, and member/attendee pictures! All are welcome for this movie night as we go through the AWS video setup guides!",
    location_id: oakland.id
})

# event11 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event12 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event13 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event14 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event15 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event16 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event17 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event18 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event19 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event20 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event21 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event22 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event23 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event24 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event25 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event26 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event27 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event28 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event29 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

# event30 = Event.create!({
#     name: "", 
#     group_id: group.id, 
#     date_time: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"),
# description: "",
#
#     location_id: 
# })

event1.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/fandom.jpg"), filename: "understanding-fandoms.jpg")
event2.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/suit-laptop.jpeg"), filename: "excellence-in-tech.jpeg")
event3.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/blm.jpg"), filename: "blm-discussions.jpg")
event4.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/meeting-color.jpg"), filename: "fix-CSS-tabs.jpg")
event5.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/screen_view.jpg"), filename: "fix-member-list.jpg")
event6.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/working.jpeg"), filename: "fix-entity-form-speed.jpeg")
event7.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/laptop-wrists.jpeg"), filename: "finish-nav-search-bar.jpeg")
event8.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/laptop-side-view.jpeg"), filename: "fix-pink-button-text-alignment.jpeg")
event9.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/laptop-landing.jpeg"), filename: "add-search-to-landing.jpeg")
event10.photo.attach(io: open("https://link-up-seeds.s3-us-west-1.amazonaws.com/laptop-from-top.jpeg"), filename: "integrate-aws.jpeg")



## ATTENDEES:
Attendee.destroy_all
host1 = Attendee.create!({ event_id: event1.id, user_id: user1.id })
host2 = Attendee.create!({ event_id: event2.id, user_id: user86.id })
host3 = Attendee.create!({ event_id: event3.id, user_id: user15.id })
host4 = Attendee.create!({ event_id: event4.id, user_id: user0.id})
host5 = Attendee.create!({ event_id: event5.id, user_id: user0.id })
host6 = Attendee.create!({ event_id: event6.id, user_id: user0.id })
host7 = Attendee.create!({ event_id: event7.id, user_id: user0.id })
host8 = Attendee.create!({ event_id: event8.id, user_id: user0.id  })
host9 = Attendee.create!({ event_id: event9.id, user_id: user0.id  })
host10 = Attendee.create!({ event_id: event10.id, user_id: user0.id })

attendee1 = Attendee.create!({ event_id: event1.id, user_id: user88.id })
attendee2 = Attendee.create!({ event_id: event1.id, user_id: user77.id })
attendee3 = Attendee.create!({ event_id: event1.id, user_id: user66.id })
attendee4 = Attendee.create!({ event_id: event1.id, user_id: user55.id })
attendee5 = Attendee.create!({ event_id: event1.id, user_id: user44.id })
attendee6 = Attendee.create!({ event_id: event1.id, user_id: user33.id })
attendee7 = Attendee.create!({ event_id: event1.id, user_id: user22.id })
attendee8 = Attendee.create!({ event_id: event1.id, user_id: user11.id })
attendee9 = Attendee.create!({ event_id: event1.id, user_id: user99.id })
attendee10 = Attendee.create!({ event_id: event1.id, user_id: user101.id })
attendee11 = Attendee.create!({ event_id: event1.id, user_id: user2.id })
attendee12 = Attendee.create!({ event_id: event2.id, user_id: user42.id })
attendee13 = Attendee.create!({ event_id: event2.id, user_id: user31.id })
attendee14 = Attendee.create!({ event_id: event2.id, user_id: user53.id })
attendee15 = Attendee.create!({ event_id: event2.id, user_id: user64.id })
attendee16 = Attendee.create!({ event_id: event2.id, user_id: user75.id })
attendee17 = Attendee.create!({ event_id: event2.id, user_id: user83.id })
attendee18 = Attendee.create!({ event_id: event2.id, user_id: user97.id })
attendee19 = Attendee.create!({ event_id: event2.id, user_id: user37.id })
attendee20 = Attendee.create!({ event_id: event2.id, user_id: user45.id })
attendee21 = Attendee.create!({ event_id: event2.id, user_id: user27.id })
attendee22 = Attendee.create!({ event_id: event2.id, user_id: user90.id })
attendee23 = Attendee.create!({ event_id: event3.id, user_id: user10.id })
attendee24 = Attendee.create!({ event_id: event3.id, user_id: user20.id })
attendee25 = Attendee.create!({ event_id: event3.id, user_id: user30.id })
attendee26 = Attendee.create!({ event_id: event3.id, user_id: user40.id })
attendee27 = Attendee.create!({ event_id: event3.id, user_id: user50.id })
attendee28 = Attendee.create!({ event_id: event3.id, user_id: user60.id })
attendee29 = Attendee.create!({ event_id: event3.id, user_id: user70.id })
attendee30 = Attendee.create!({ event_id: event3.id, user_id: user80.id })
attendee31 = Attendee.create!({ event_id: event3.id, user_id: user90.id })
attendee32 = Attendee.create!({ event_id: event3.id, user_id: user100.id })
attendee33 = Attendee.create!({ event_id: event3.id, user_id: user16.id })
attendee34 = Attendee.create!({ user_id: user12.id, event_id: event4.id })
attendee35 = Attendee.create!({ user_id: user23.id, event_id: event4.id })
attendee36 = Attendee.create!({ user_id: user37.id, event_id: event4.id })
attendee37 = Attendee.create!({ user_id: user62.id, event_id: event4.id })
attendee38 = Attendee.create!({ user_id: user89.id, event_id: event4.id })
attendee39 = Attendee.create!({ user_id: user91.id, event_id: event4.id })
attendee40 = Attendee.create!({ user_id: user45.id, event_id: event4.id })
attendee41 = Attendee.create!({ user_id: user20.id, event_id: event4.id })
attendee42 = Attendee.create!({ user_id: user31.id, event_id: event4.id })
attendee43 = Attendee.create!({ user_id: user29.id, event_id: event4.id })
attendee44 = Attendee.create!({ user_id: user52.id, event_id: event4.id })
attendee45 = Attendee.create!({ user_id: user19.id, event_id: event4.id })
attendee46 = Attendee.create!({ user_id: user27.id, event_id: event4.id })
attendee47 = Attendee.create!({ user_id: user34.id, event_id: event4.id })
attendee48 = Attendee.create!({ user_id: user41.id, event_id: event4.id })
attendee49 = Attendee.create!({ user_id: user36.id, event_id: event4.id })
attendee50 = Attendee.create!({ user_id: user13.id, event_id: event5.id })
attendee51 = Attendee.create!({ user_id: user23.id, event_id: event5.id })
attendee52 = Attendee.create!({ user_id: user37.id, event_id: event5.id })
attendee53 = Attendee.create!({ user_id: user62.id, event_id: event5.id })
attendee54 = Attendee.create!({ user_id: user89.id, event_id: event5.id })
attendee55 = Attendee.create!({ user_id: user91.id, event_id: event5.id })
attendee56 = Attendee.create!({ user_id: user45.id, event_id: event5.id })
attendee57 = Attendee.create!({ user_id: user20.id, event_id: event5.id })
attendee58 = Attendee.create!({ user_id: user31.id, event_id: event5.id })
attendee59 = Attendee.create!({ user_id: user29.id, event_id: event5.id })
attendee60 = Attendee.create!({ user_id: user52.id, event_id: event5.id })
attendee61 = Attendee.create!({ user_id: user19.id, event_id: event5.id })
attendee62 = Attendee.create!({ user_id: user27.id, event_id: event5.id })
attendee63 = Attendee.create!({ user_id: user34.id, event_id: event5.id })
attendee64 = Attendee.create!({ user_id: user41.id, event_id: event5.id })
attendee65 = Attendee.create!({ user_id: user36.id, event_id: event5.id })
attendee66 = Attendee.create!({ user_id: user14.id, event_id: event6.id })
attendee67 = Attendee.create!({ user_id: user23.id, event_id: event6.id })
attendee68 = Attendee.create!({ user_id: user37.id, event_id: event6.id })
attendee69 = Attendee.create!({ user_id: user62.id, event_id: event6.id })
attendee70 = Attendee.create!({ user_id: user89.id, event_id: event6.id })
attendee71 = Attendee.create!({ user_id: user91.id, event_id: event6.id })
attendee72 = Attendee.create!({ user_id: user45.id, event_id: event6.id })
attendee73 = Attendee.create!({ user_id: user20.id, event_id: event6.id })
attendee74 = Attendee.create!({ user_id: user31.id, event_id: event6.id })
attendee75 = Attendee.create!({ user_id: user29.id, event_id: event6.id })
attendee76 = Attendee.create!({ user_id: user52.id, event_id: event6.id })
attendee77 = Attendee.create!({ user_id: user19.id, event_id: event6.id })
attendee78 = Attendee.create!({ user_id: user27.id, event_id: event6.id })
attendee79 = Attendee.create!({ user_id: user34.id, event_id: event6.id })
attendee80 = Attendee.create!({ user_id: user41.id, event_id: event6.id })
attendee81 = Attendee.create!({ user_id: user36.id, event_id: event6.id })
attendee82 = Attendee.create!({ event_id: event7.id, user_id: user15.id })
attendee83 = Attendee.create!({ event_id: event7.id, user_id: user103.id })
attendee84 = Attendee.create!({ event_id: event7.id, user_id: user26.id })
attendee85 = Attendee.create!({ event_id: event7.id, user_id: user27.id })
attendee86 = Attendee.create!({ event_id: event7.id, user_id: user104.id })
attendee87 = Attendee.create!({ event_id: event7.id, user_id: user54.id })
attendee88 = Attendee.create!({ event_id: event7.id, user_id: user36.id })
attendee89 = Attendee.create!({ event_id: event7.id, user_id: user22.id })
attendee90 = Attendee.create!({ event_id: event7.id, user_id: user91.id })
attendee91 = Attendee.create!({ event_id: event7.id, user_id: user12.id })
attendee92 = Attendee.create!({ event_id: event7.id, user_id: user64.id })
attendee93 = Attendee.create!({ event_id: event8.id, user_id: user16.id })
attendee94 = Attendee.create!({ event_id: event8.id, user_id: user83.id })
attendee95 = Attendee.create!({ event_id: event8.id, user_id: user77.id })
attendee96 = Attendee.create!({ event_id: event8.id, user_id: user46.id })
attendee97 = Attendee.create!({ event_id: event8.id, user_id: user28.id })
attendee98 = Attendee.create!({ event_id: event8.id, user_id: user18.id })
attendee99 = Attendee.create!({ event_id: event8.id, user_id: user72.id })
attendee100 = Attendee.create!({ event_id: event8.id, user_id: user51.id })
attendee101 = Attendee.create!({ event_id: event8.id, user_id: user59.id })
attendee102 = Attendee.create!({ event_id: event8.id, user_id: user49.id })
attendee103 = Attendee.create!({ event_id: event9.id, user_id: user11.id })
attendee104 = Attendee.create!({ event_id: event9.id, user_id: user22.id })
attendee105 = Attendee.create!({ event_id: event9.id, user_id: user33.id })
attendee106 = Attendee.create!({ event_id: event9.id, user_id: user44.id })
attendee107 = Attendee.create!({ event_id: event9.id, user_id: user55.id })
attendee108 = Attendee.create!({ event_id: event9.id, user_id: user66.id })
attendee109 = Attendee.create!({ event_id: event9.id, user_id: user77.id })
attendee110 = Attendee.create!({ event_id: event9.id, user_id: user88.id })
attendee111 = Attendee.create!({ event_id: event9.id, user_id: user99.id })
attendee112 = Attendee.create!({ event_id: event9.id, user_id: user27.id })
attendee113 = Attendee.create!({ event_id: event10.id, user_id: user18.id })
attendee114 = Attendee.create!({ event_id: event10.id, user_id: user64.id })
attendee115 = Attendee.create!({ event_id: event10.id, user_id: user30.id })
attendee116 = Attendee.create!({ event_id: event10.id, user_id: user85.id })
attendee117 = Attendee.create!({ event_id: event10.id, user_id: user91.id })
attendee118 = Attendee.create!({ event_id: event10.id, user_id: user51.id })
attendee119 = Attendee.create!({ event_id: event10.id, user_id: user28.id })

