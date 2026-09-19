export interface InventoryItem {
  id: string;
  category: string;
  name: string;
  specs: string;
  price: number;
  priceMax: number;
  condition: string;
  status: 'In Stock' | 'Out of Stock' | 'Reserved';
  image: string;
  quantity?: number;
  warranty?: string;
}

export const initialInventory: InventoryItem[] = [
  // 1️⃣ Used Business Laptops — Core i5 8th Gen
  {
    id: 'l1',
    category: 'Used Laptop',
    name: 'Dell Latitude 7280',
    specs: 'i5-8350U | 8GB RAM | 256GB SSD | 12.5" FHD',
    price: 55000,
    priceMax: 63000,
    condition: 'Used',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l2',
    category: 'Used Laptop',
    name: 'Dell Latitude 7390',
    specs: 'i5-8350U | 8GB RAM | 256GB SSD | 13.3" FHD',
    price: 58000,
    priceMax: 65000,
    condition: 'Used',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l3',
    category: 'Used Laptop',
    name: 'Dell Latitude 7490',
    specs: 'i5-8350U | 8GB RAM | 256GB SSD | 14" FHD',
    price: 60000,
    priceMax: 68000,
    condition: 'Used',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l4',
    category: 'Used Laptop',
    name: 'Dell Latitude 7400',
    specs: 'i5-8365U | 8GB RAM | 256GB SSD | 14" FHD',
    price: 70000,
    priceMax: 78000,
    condition: 'Used',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l5',
    category: 'Used Laptop',
    name: 'HP EliteBook 840 G5',
    specs: 'i5-8250U | 8GB RAM | 256GB SSD | 14" FHD',
    price: 60000,
    priceMax: 70000,
    condition: 'Used',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1544006659-f0b21884cb1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l6',
    category: 'Used Laptop',
    name: 'HP EliteBook 830 G5',
    specs: 'i5-8350U | 8GB RAM | 256GB SSD | 13.3" FHD',
    price: 58000,
    priceMax: 65000,
    condition: 'Used',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'l7',
    category: 'Used Laptop',
    name: 'HP EliteBook 850 G5',
    specs: 'i5-8350U | 8GB RAM | 256GB SSD | 15.6" FHD',
    price: 70000,
    priceMax: 80000,
    condition: 'Used',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800'
  },

  // 2️⃣ New Laptops
  {
    id: 'nl1',
    category: 'Laptop',
    name: 'Dell Latitude 7420 i5',
    specs: 'i5-1135G7 | 8GB RAM | 512GB SSD | 14" FHD',
    price: 85000,
    priceMax: 95000,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800'
  },

  // 3️⃣ CCTV & Security
  {
    id: 'c1',
    category: 'CCTV Camera',
    name: 'Hikvision IP Camera 2MP',
    specs: 'IR Night Vision | Weatherproof',
    price: 6500,
    priceMax: 12000,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1557597774-9d2739f8ff19?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c2',
    category: 'CCTV Camera',
    name: 'Hikvision IP Camera 4MP',
    specs: 'IR Night Vision | Weatherproof',
    price: 10000,
    priceMax: 15000,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1551829142-d9b812bb3d2f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c3',
    category: 'CCTV Camera',
    name: 'Dahua Analog Camera 2MP',
    specs: 'IR Night Vision | Outdoor',
    price: 3000,
    priceMax: 4800,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1524143878510-e3b8d6312402?auto=format&fit=crop&q=80&w=800'
  },

  // 4️⃣ DVR / NVR
  {
    id: 'dvr1',
    category: 'DVR/NVR',
    name: 'Hikvision 4 Channel DVR',
    specs: 'Up to 2MP Cameras | 1 HDD Bay',
    price: 8000,
    priceMax: 12500,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dvr2',
    category: 'DVR/NVR',
    name: 'Hikvision 8 Channel DVR',
    specs: 'Up to 8MP Cameras | 1 HDD Bay',
    price: 10000,
    priceMax: 19500,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },

  // 5️⃣ Biometric Machines
  {
    id: 'bio1',
    category: 'Biometric Machine',
    name: 'ZKTeco F8 Fingerprint',
    specs: 'Fingerprint | 3,000 Users',
    price: 16300,
    priceMax: 16300,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bio2',
    category: 'Biometric Machine',
    name: 'ZKTeco K20 / K40',
    specs: 'Fingerprint & Card | Battery Backup',
    price: 12999,
    priceMax: 15600,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=800'
  },

  // 6️⃣ Telephone Systems
  {
    id: 'pbx1',
    category: 'Telephone System',
    name: 'Grandstream UCM6202 IP PBX',
    specs: '2 FXO / 2 FXS | 500 Users',
    price: 55000,
    priceMax: 70000,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800'
  },

  // 7️⃣ PoE Switches
  {
    id: 'sw1',
    category: 'Network Switch',
    name: 'TP-Link TL-SG1008P',
    specs: '8 Port PoE | 63W Budget',
    price: 18000,
    priceMax: 24000,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1558494949-ef010ccdcc39?auto=format&fit=crop&q=80&w=800'
  },

  // 8️⃣ UPS Systems
  {
    id: 'ups1',
    category: 'UPS System',
    name: 'APC BX650LI',
    specs: '650VA | 20–30 mins Backup',
    price: 22000,
    priceMax: 28000,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&q=80&w=800'
  },

  // 9️⃣ Accessories & Cables
  {
    id: 'cb1',
    category: 'Cable Roll',
    name: 'RG59 CCTV Cable Roll (90m / 100m)',
    specs: 'Standard CCTV camera cable',
    price: 8500,
    priceMax: 11000,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1558485940-8ee7791a3a02?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hdd1',
    category: 'Hard Drive',
    name: '1TB Surveillance HDD',
    specs: 'Surveillance Grade | 24/7 Reliability',
    price: 8500,
    priceMax: 11000,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1531492746377-26be2486d6b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bnc1',
    category: 'Accessory',
    name: 'BNC Connector Pack (50 pcs)',
    specs: 'Bulk pack for CCTV installs',
    price: 2800,
    priceMax: 3500,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'adp1',
    category: 'Power Adapter',
    name: '12V 5A Adapter (4 Cameras)',
    specs: 'Powers up to 4 cameras',
    price: 1500,
    priceMax: 2200,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800'
  },

  // 🔟 Monitors
  {
    id: 'm1',
    category: 'Monitor',
    name: '19" LED Monitor',
    specs: 'VGA + Power Cable Included',
    price: 9000,
    priceMax: 12000,
    condition: 'New',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1547119957-630f9c44b952?auto=format&fit=crop&q=80&w=800'
  }
];