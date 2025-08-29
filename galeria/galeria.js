// Galería de Los Sims - Funcionalidad JavaScript

// Datos de las imágenes de la galería
const galleryImages = [
    {
        id: 1,
        url: '../img/aliens.png',
        title: 'Abducción',
        category: 'Gaming'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1550068202-30226b5f7bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW1zJTIwaG91c2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTY0ODQ4Mzh8MA&ixlib=rb-4.1.0&q=80&w=600',
        title: 'Dream House Build',
        category: 'Arquitectura'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1562017971-ad8f1457b739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGhvdXNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NDg0ODM5fDA&ixlib=rb-4.1.0&q=80&w=600',
        title: 'Diseño Interior Colorido',
        category: 'Interiores'
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTY0ODI0NDl8MA&ixlib=rb-4.1.0&q=80&w=600',
        title: 'Arquitectura Moderna',
        category: 'Arquitectura'
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1660496379804-b408bfacc9cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NjQzMDU0Nnww&ixlib=rb-4.1.0&q=80&w=600',
        title: 'Cuarto Gaming Vibrante',
        category: 'Gaming'
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1620568578900-a0cf51e83c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2FydG9vbiUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NTY0NzY0NzN8MA&ixlib=rb-4.1.0&q=80&w=600',
        title: 'Diseño de Personajes',
        category: 'Personajes'
    },
    {
        id: 7,
        url: 'https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc1NjQ4NDgzOXww&ixlib=rb-4.1.0&q=80&w=600',
        title: 'Sala de Estar Luminosa',
        category: 'Interiores'
    },
    {
        id: 8,
        url: 'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc1NjQwMTMwOHww&ixlib=rb-4.1.0&q=80&w=600',
        title: 'Cocina Moderna',
        category: 'Interiores'
    }
];

// Variable global para el filtro actual
let currentFilter = 'todos';

// Función para crear un elemento de galería
function createGalleryItem(image) {
    return `
        <div class="gallery-item" data-category="${image.category}">
            <img src="${image.url}" alt="${image.title}" class="gallery-item-image" loading="lazy">
            <div class="gallery-item-overlay">
                <h3 class="gallery-item-title">${image.title}</h3>
            </div>
            <div class="gallery-item-category">${image.category}</div>
        </div>
    `;
}

// Función para renderizar la galería
function renderGallery(images = galleryImages) {
    const galleryContainer = document.getElementById('galleryGrid');
    
    if (!galleryContainer) {
        console.error('Contenedor de galería no encontrado');
        return;
    }

    // Filtrar imágenes si hay un filtro activo
    const filteredImages = currentFilter === 'todos' 
        ? images 
        : images.filter(img => img.category === currentFilter);

    // Mostrar loading
    galleryContainer.innerHTML = '<div class="loading"><div class="loading-spinner"></div></div>';

    // Simular carga de imágenes
    setTimeout(() => {
        galleryContainer.innerHTML = filteredImages.map(createGalleryItem).join('');
        
        // Añadir event listeners para las imágenes
        addImageListeners();
    }, 500);
}

// Función para añadir event listeners a las imágenes
function addImageListeners() {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.gallery-item-title').textContent;
            const category = this.querySelector('.gallery-item-category').textContent;
            
            // Aquí puedes añadir funcionalidad adicional como modal, lightbox, etc.
            console.log(`Clicked on: ${title} (${category})`);
            
        });
    });
}

// Función para configurar los filtros
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase activa de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase activa al botón clickeado
            this.classList.add('active');
            
            // Obtener la categoría del filtro
            currentFilter = this.dataset.filter;
            
            // Re-renderizar la galería con el filtro
            renderGallery();
        });
    });
}

// Función para inicializar la galería
function initGallery() {
    // Configurar filtros
    setupFilters();
    
    // Renderizar galería inicial
    renderGallery();
    
    // Configurar búsqueda en tiempo real (si existe el input de búsqueda)
    const searchInput = document.querySelector('.searchBar');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            if (searchTerm === '') {
                renderGallery();
                return;
            }
            
            const filteredImages = galleryImages.filter(img => 
                img.title.toLowerCase().includes(searchTerm) ||
                img.category.toLowerCase().includes(searchTerm)
            );
            
            renderGallery(filteredImages);
        });
    }
}

// Función para manejar la carga de imágenes con lazy loading
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
});

// Función para añadir más imágenes (para futuras expansiones)
function addImages(newImages) {
    galleryImages.push(...newImages);
    renderGallery();
}

// Exportar funciones para uso global si es necesario
window.GalleryApp = {
    init: initGallery,
    render: renderGallery,
    addImages: addImages,
    currentFilter: () => currentFilter
};