import Banshee from "./Banshee.js";
import A380 from "./A380.js";
import B747 from "./B747.js";
import FlysFactory from "./FlysFactory.js";

const flyBanshee = FlysFactory.create(Banshee.id);
flyBanshee.shooter();
