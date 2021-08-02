export interface HotelDealItem {
    title: string,
    features: string[]
}

export interface HotelDealsState {
    hotelName: string,
    hotelAssessment: 0 | 1 | 2 | 3 | 4 | 5,
    hotelDeals: HotelDealItem[]
}

const state: HotelDealsState = {
    hotelName: 'Mieres del Camín Apartamentos',
    hotelAssessment: 5,
    hotelDeals: [
        {
            title: 'Solo Alojamiento',
            features: ['Sin régimen', 'Botella de agua de bienvenida']
        },
        {
            title: 'Alojamiento y Desayuno',
            features: ['Desayuno buffet completo']
        },
        {
            title: 'Media Pensión',
            features: ['Desayuno buffet completo', 'Cena buffet', 'No incluye']
        },
        {
            title: 'Todo incluido',
            features: [
                'Dispondrás de comida y bebida todo el día y durante toda tu estancia.',
                'Restaurante buffet',
                'Snack Bar',
                'Servicio de bares (marcas nacionales)'
            ]
        },
        {
            title: 'Unlimited Services',
            features: [
                'Restaurante buffet con bebidas Premium',
                'Restaurante a la carta (una cena por estancia)',
                'Snack Bar con bebidas Premium',
                'Minibar incluido',
                'Acceso a SPA y 45 minutos de masaje por persona',
                'Actividades deportivas (acuáticas sin motor)',
                'Caja fuerte',
                'Parking gratuito',
                'Lavandería'
            ]
        },
    ]
}

export default state;