import cable from "./Assets/Images/Cablepng.webp";
import monitor from "./Assets/Images/monitor.webp";
import computer from "./Assets/Images/PCpng.webp";
import cmos from "./Assets/Images/cmospng.webp";
import laptop from "./Assets/Images/Lappng.webp";

export const Categories = [
  {
    category: 'Computers',
    subCat: [
      {
        name: 'Asus1',
        products: [
          { 
            id: 1, 
            name: 'Asus Laptop 1', 
            price: '1000', 
            image: computer,
            description: "High-performance laptop with an Intel i7 processor, 16GB RAM, and 512GB SSD.",
            specs: "Intel i7, 16GB RAM, 512GB SSD, 15.6-inch display",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 2, 
            name: 'Asus Laptop 2', 
            price: '1200', 
            image: computer,
            description: "Premium laptop for gaming and productivity. Features RGB keyboard and NVIDIA GTX 1660.",
            specs: "Intel i7, 16GB RAM, 1TB SSD, NVIDIA GTX 1660, 17.3-inch display",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      },
      {
        name: 'Dell',
        products: [
          { 
            id: 3, 
            name: 'Dell Laptop 1', 
            price: '900', 
            image: computer,
            description: "Reliable laptop with Intel i5 processor, suitable for everyday tasks.",
            specs: "Intel i5, 8GB RAM, 256GB SSD, 14-inch display",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 4, 
            name: 'Dell Laptop 2', 
            price: '1100', 
            image: computer,
            description: "Powerful Dell laptop with a sleek design and long battery life.",
            specs: "Intel i7, 16GB RAM, 512GB SSD, 15.6-inch display, Backlit keyboard",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      },
      {
        name: 'Tuf',
        products: [
          { 
            id: 5, 
            name: 'Tuf Laptop 1', 
            price: '950', 
            image: computer,
            description: "Durable laptop built for high performance in demanding environments.",
            specs: "AMD Ryzen 5, 16GB RAM, 512GB SSD, 15.6-inch display",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 6, 
            name: 'Tuf Laptop 2', 
            price: '1150', 
            image: computer,
            description: "Robust laptop with military-grade toughness and excellent cooling.",
            specs: "AMD Ryzen 7, 16GB RAM, 1TB SSD, NVIDIA GTX 1650, 17.3-inch display",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      }
    ]
  },
  {
    category: 'Monitors',
    subCat: [
      {
        name: 'Asus',
        products: [
          { 
            id: 10, 
            name: 'Asus Monitor 1', 
            price: '1000', 
            image: monitor,
            description: "High-resolution monitor with stunning visuals and a wide color gamut.",
            specs: "27-inch, 4K UHD, 144Hz, IPS panel",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 2, 
            name: 'Asus Monitor 2', 
            price: '1200', 
            image: monitor,
            description: "Curved gaming monitor with fast refresh rates and adaptive sync technology.",
            specs: "32-inch, QHD, 165Hz, Curved, G-Sync",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      },
      {
        name: 'Dell',
        products: [
          { 
            id: 3, 
            name: 'Dell Monitor 1', 
            price: '900', 
            image: monitor,
            description: "Reliable monitor with excellent color accuracy and energy-efficient design.",
            specs: "24-inch, FHD, 60Hz, IPS panel",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 4, 
            name: 'Dell Monitor 2', 
            price: '1100', 
            image: monitor,
            description: "UltraSharp monitor with InfinityEdge for a virtually borderless display.",
            specs: "27-inch, QHD, 75Hz, IPS panel, InfinityEdge",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      },
      {
        name: 'Tuf',
        products: [
          { 
            id: 5, 
            name: 'Tuf Monitor 1', 
            price: '950', 
            image: monitor,
            description: "Rugged monitor built for long-lasting performance in extreme conditions.",
            specs: "28-inch, 4K UHD, 120Hz, TN panel",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 6, 
            name: 'Tuf Monitor 2', 
            price: '1150', 
            image: monitor,
            description: "Gaming monitor with advanced cooling and high refresh rates for smooth gameplay.",
            specs: "32-inch, QHD, 165Hz, Curved, FreeSync",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      }
    ]
  },
  {
    category: 'Batteries',
    subCat: [
      {
        name: 'CMOS',
        products: [
          { 
            id: 1, 
            name: 'CMOS Battery 1', 
            price: '20', 
            image: cmos,
            description: "Replacement CMOS battery for maintaining system clock and BIOS settings.",
            specs: "CR2032, 3V, Lithium",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 2, 
            name: 'CMOS Battery 2', 
            price: '25', 
            image: cmos,
            description: "High-performance CMOS battery with extended life.",
            specs: "CR2025, 3V, Lithium",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      },
      {
        name: 'PSU',
        products: [
          { 
            id: 3, 
            name: 'PSU Battery 1', 
            price: '80', 
            image: cmos,
            description: "Reliable power supply unit for uninterrupted power to your devices.",
            specs: "500W, ATX, Modular",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 4, 
            name: 'PSU Battery 2', 
            price: '120', 
            image: cmos,
            description: "High-capacity PSU with efficient cooling and stable power delivery.",
            specs: "750W, ATX, Gold Rated",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      }
    ]
  },
  {
    category: 'Cables',
    subCat: [
      {
        name: 'VGA Cables',
        products: [
          { 
            id: 1, 
            name: 'VGA Cable 1', 
            price: '15', 
            image: cable,
            description: "Durable VGA cable for connecting monitors and projectors.",
            specs: "1.5m, Male-Male, 15 Pin",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 2, 
            name: 'VGA Cable 2', 
            price: '18', 
            image: cable,
            description: "High-quality VGA cable with gold-plated connectors for better signal.",
            specs: "2m, Male-Male, 15 Pin",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      },
      {
        name: 'HDMI Cables',
        products: [
          { 
            id: 3, 
            name: 'HDMI Cable 1', 
            price: '25', 
            image: cable,
            description: "High-speed HDMI cable with support for 4K resolution.",
            specs: "2m, High-Speed, HDMI 2.0",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 4, 
            name: 'HDMI Cable 2', 
            price: '30', 
            image: cable,
            description: "Premium HDMI cable with Ethernet support and high durability.",
            specs: "3m, Premium, HDMI 2.1",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      },
      {
        name: 'Audio Cables',
        products: [
          { 
            id: 5, 
            name: 'Audio Cable 1', 
            price: '10', 
            image: cable,
            description: "Standard audio cable for connecting speakers and audio devices.",
            specs: "3.5mm, Male-Male, 1.2m",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 6, 
            name: 'Audio Cable 2', 
            price: '12', 
            image: cable,
            description: "High-quality audio cable with gold-plated connectors for clear sound.",
            specs: "3.5mm, Male-Male, 2m",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      }
    ]
  },
  {
    category: 'Laptops',
    subCat: [
      {
        name: 'Asus Laptop',
        products: [
          { 
            id: 1, 
            name: 'Asus Laptop 1', 
            price: '1000', 
            image: laptop,
            description: "High-performance laptop with an Intel i7 processor, 16GB RAM, and 512GB SSD.",
            specs: "Intel i7, 16GB RAM, 512GB SSD, 15.6-inch display",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 2, 
            name: 'Asus Laptop 2', 
            price: '1200', 
            image: laptop,
            description: "Premium laptop for gaming and productivity. Features RGB keyboard and NVIDIA GTX 1660.",
            specs: "Intel i7, 16GB RAM, 1TB SSD, NVIDIA GTX 1660, 17.3-inch display",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      },
      {
        name: 'Dell Laptop',
        products: [
          { 
            id: 3, 
            name: 'Dell Laptop 1', 
            price: '900', 
            image: laptop,
            description: "Reliable laptop with Intel i5 processor, suitable for everyday tasks.",
            specs: "Intel i5, 8GB RAM, 256GB SSD, 14-inch display",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 4, 
            name: 'Dell Laptop 2', 
            price: '1100', 
            image: laptop,
            description: "Powerful Dell laptop with a sleek design and long battery life.",
            specs: "Intel i7, 16GB RAM, 512GB SSD, 15.6-inch display, Backlit keyboard",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      },
      {
        name: 'Tuf Laptop',
        products: [
          { 
            id: 5, 
            name: 'Tuf Laptop 1', 
            price: '950', 
            image: laptop,
            description: "Durable laptop built for high performance in demanding environments.",
            specs: "AMD Ryzen 5, 16GB RAM, 512GB SSD, 15.6-inch display",
            stock: '1',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          },
          { 
            id: 6, 
            name: 'Tuf Laptop 2', 
            price: '1150', 
            image: laptop,
            description: "Robust laptop with military-grade toughness and excellent cooling.",
            specs: "AMD Ryzen 7, 16GB RAM, 1TB SSD, NVIDIA GTX 1650, 17.3-inch display",
            stock: '0',
            SubImage: [
              { src: cmos, alt: 'Sub Image 1' },
              { src: laptop, alt: 'Sub Image 2' },
              { src: monitor, alt: 'Sub Image 3' }
            ],
          }
        ]
      }
    ]
  }
];
