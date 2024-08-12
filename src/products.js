import cable from "./Assets/Images/Cablepng.webp"
import monitor from "./Assets/Images/monitor.webp"
import computer from "./Assets/Images/PCpng.webp"
import cmos from "./Assets/Images/cmospng.webp"
import laptop from "./Assets/Images/Lappng.webp"

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
              description: "High-refresh-rate monitor with vibrant colors and HDR support.",
              specs: "32-inch, QHD, 144Hz, HDR, VA panel",
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
              price: '1000', 
              image: cmos,
              description: "Long-lasting CMOS battery for reliable motherboard clock and settings.",
              specs: "3V, Lithium, 10-year shelf life",
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
              price: '1200', 
              image: cmos,
              description: "High-quality CMOS battery with extended life and stable performance.",
              specs: "3V, Lithium, 15-year shelf life",
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
              price: '900', 
              image: cmos,
              description: "Reliable PSU battery providing stable power for critical components.",
              specs: "600W, 80+ Bronze, Modular cables",
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
              price: '1100', 
              image: cmos,
              description: "Efficient PSU battery with silent operation and advanced protections.",
              specs: "750W, 80+ Gold, Fully modular cables",
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
              price: '1000', 
              image: cable,
              description: "High-quality VGA cable for clear and reliable video connections.",
              specs: "1.8m, Gold-plated connectors, Shielded",
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
              price: '1200', 
              image: cable,
              description: "Durable VGA cable with reinforced connectors for long-lasting use.",
              specs: "3m, Gold-plated connectors, Double-shielded",
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
              price: '900', 
              image: cable,
              description: "High-speed HDMI cable for 4K video and audio transmission.",
              specs: "2m, 4K@60Hz, Gold-plated connectors, Ethernet support",
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
              price: '1100', 
              image: cable,
              description: "Premium HDMI cable with enhanced durability and signal integrity.",
              specs: "3m, 4K@60Hz, Braided, Gold-plated connectors",
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
              price: '950', 
              image: cable,
              description: "High-fidelity audio cable for superior sound quality.",
              specs: "1.5m, 3.5mm to 3.5mm, Oxygen-free copper, Gold-plated connectors",
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
              price: '1150', 
              image: cable,
              description: "Professional-grade audio cable with noise reduction features.",
              specs: "2m, 3.5mm to 3.5mm, Braided, Gold-plated connectors, Shielded",
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
              name: 'Asus laptop 1', 
              price: '1000', 
              image: laptop,
              description: "Versatile laptop with a lightweight design and powerful performance.",
              specs: "Intel i5, 8GB RAM, 256GB SSD, 14-inch display, Backlit keyboard",
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
              name: 'Asus laptop 2', 
              price: '1200', 
              image: laptop,
              description: "High-end laptop with superior graphics and fast processing speeds.",
              specs: "Intel i7, 16GB RAM, 512GB SSD, NVIDIA GTX 1650, 15.6-inch display",
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
          name: 'Dell Laptop',
          products: [
            { 
              id: 3, 
              name: 'Dell laptop 1', 
              price: '1000', 
              image: laptop,
              description: "Compact Dell laptop with efficient performance and stylish design.",
              specs: "Intel i5, 8GB RAM, 256GB SSD, 13.3-inch display",
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
              name: 'Dell laptop 2', 
              price: '1200', 
              image: laptop,
              description: "Advanced Dell laptop with robust security features and sleek aesthetics.",
              specs: "Intel i7, 16GB RAM, 512GB SSD, 14-inch display, Fingerprint reader",
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
          name: 'MacBook',
          products: [
            { 
              id: 5, 
              name: 'MacBook Pro', 
              price: '2000', 
              image: laptop,
              description: "High-performance MacBook Pro with stunning Retina display and M1 chip.",
              specs: "Apple M1, 16GB RAM, 512GB SSD, 13-inch Retina display, Touch Bar",
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
              name: 'MacBook Air', 
              price: '1500', 
              image: laptop,
              description: "Lightweight MacBook Air with powerful performance and long battery life.",
              specs: "Apple M1, 8GB RAM, 256GB SSD, 13-inch Retina display, Touch ID",
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
    }
];
