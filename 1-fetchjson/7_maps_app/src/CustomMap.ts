export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string
}

export class CustomMap {
    private readonly googleMap: google.maps.Map

    constructor(divElementId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divElementId) as HTMLElement, {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 3
        });
    }

    addMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        this.addLabel(marker, mappable.markerContent())
    }

    private addLabel(marker: google.maps.Marker, label: string) {
        const infoWindow = new google.maps.InfoWindow({
            content: label
        })

        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker)
        })
    }
}
