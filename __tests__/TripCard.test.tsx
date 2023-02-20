import { render, screen } from '@testing-library/react';
import TripCard from '../src/components/Cards/TripCard';
import '@testing-library/jest-dom';

jest.mock('next/router', () => require('next-router-mock'));

describe('Trip Card', () => {
  it('should render correct departure location', () => {
    render(<TripCard connection={connection} />);

    const element = screen.getByTestId('trip-departure');
    expect(element).toHaveTextContent('Basel SBB');
  });

  it('should render correct destination', () => {
    render(<TripCard connection={connection} />);

    const element = screen.getByTestId('trip-destination');
    expect(element).toHaveTextContent('Zürich HB');
  });
});

var connection = {
  from: {
    station: {
      id: '8500010',
      name: 'Basel SBB',
      score: null,
      coordinate: {
        type: 'WGS84',
        x: 47.547412,
        y: 7.589577,
      },
      distance: null,
    },
    arrival: null,
    arrivalTimestamp: null,
    departure: '2023-02-20T20:33:00+0100',
    departureTimestamp: 1676921580,
    delay: 0,
    platform: '6',
    prognosis: {
      platform: null,
      arrival: null,
      departure: '2023-02-20T20:33:00+0100',
      capacity1st: null,
      capacity2nd: null,
    },
    realtimeAvailability: null,
    location: {
      id: '8500010',
      name: 'Basel SBB',
      score: null,
      coordinate: {
        type: 'WGS84',
        x: 47.547412,
        y: 7.589577,
      },
      distance: null,
    },
  },
  to: {
    station: {
      id: '8503000',
      name: 'Zürich HB',
      score: null,
      coordinate: {
        type: 'WGS84',
        x: 47.377847,
        y: 8.540502,
      },
      distance: null,
    },
    arrival: '2023-02-20T21:26:00+0100',
    arrivalTimestamp: 1676924760,
    departure: null,
    departureTimestamp: null,
    delay: null,
    platform: '5',
    prognosis: {
      platform: null,
      arrival: null,
      departure: null,
      capacity1st: null,
      capacity2nd: null,
    },
    realtimeAvailability: null,
    location: {
      id: '8503000',
      name: 'Zürich HB',
      score: null,
      coordinate: {
        type: 'WGS84',
        x: 47.377847,
        y: 8.540502,
      },
      distance: null,
    },
  },
  duration: '00d00:53:00',
  transfers: 0,
  service: null,
  products: ['IC 3'],
  capacity1st: null,
  capacity2nd: null,
  sections: [
    {
      journey: {
        name: null,
        category: 'IC',
        subcategory: null,
        categoryCode: null,
        number: '3',
        operator: 'SBB',
        to: 'Chur',
        passList: [
          {
            station: {
              id: '8500010',
              name: 'Basel SBB',
              score: null,
              coordinate: {
                type: 'WGS84',
                x: 47.547412,
                y: 7.589577,
              },
              distance: null,
            },
            arrival: null,
            arrivalTimestamp: null,
            departure: '2023-02-20T20:33:00+0100',
            departureTimestamp: 1676921580,
            delay: 0,
            platform: '6',
            prognosis: {
              platform: null,
              arrival: null,
              departure: '2023-02-20T20:33:00+0100',
              capacity1st: null,
              capacity2nd: null,
            },
            realtimeAvailability: null,
            location: {
              id: '8500010',
              name: 'Basel SBB',
              score: null,
              coordinate: {
                type: 'WGS84',
                x: 47.547412,
                y: 7.589577,
              },
              distance: null,
            },
          },
          {
            station: {
              id: '0000175',
              name: 'Hauenstein-Basistunnel',
              score: null,
              coordinate: {
                type: 'WGS84',
                x: 47.401131,
                y: 7.904324,
              },
              distance: null,
            },
            arrival: null,
            arrivalTimestamp: null,
            departure: null,
            departureTimestamp: null,
            delay: null,
            platform: null,
            prognosis: {
              platform: null,
              arrival: null,
              departure: '2023-02-20T20:28:06+0100',
              capacity1st: null,
              capacity2nd: null,
            },
            realtimeAvailability: null,
            location: {
              id: '0000175',
              name: 'Hauenstein-Basistunnel',
              score: null,
              coordinate: {
                type: 'WGS84',
                x: 47.401131,
                y: 7.904324,
              },
              distance: null,
            },
          },
          {
            station: {
              id: '8503000',
              name: 'Zürich HB',
              score: null,
              coordinate: {
                type: 'WGS84',
                x: 47.377847,
                y: 8.540502,
              },
              distance: null,
            },
            arrival: '2023-02-20T21:26:00+0100',
            arrivalTimestamp: 1676924760,
            departure: null,
            departureTimestamp: null,
            delay: 0,
            platform: '5',
            prognosis: {
              platform: null,
              arrival: '2023-02-20T21:26:00+0100',
              departure: null,
              capacity1st: null,
              capacity2nd: null,
            },
            realtimeAvailability: null,
            location: {
              id: '8503000',
              name: 'Zürich HB',
              score: null,
              coordinate: {
                type: 'WGS84',
                x: 47.377847,
                y: 8.540502,
              },
              distance: null,
            },
          },
        ],
        capacity1st: null,
        capacity2nd: null,
      },
      walk: null,
      departure: {
        station: {
          id: '8500010',
          name: 'Basel SBB',
          score: null,
          coordinate: {
            type: 'WGS84',
            x: 47.547412,
            y: 7.589577,
          },
          distance: null,
        },
        arrival: null,
        arrivalTimestamp: null,
        departure: '2023-02-20T20:33:00+0100',
        departureTimestamp: 1676921580,
        delay: 0,
        platform: '6',
        prognosis: {
          platform: null,
          arrival: null,
          departure: '2023-02-20T20:33:00+0100',
          capacity1st: null,
          capacity2nd: null,
        },
        realtimeAvailability: null,
        location: {
          id: '8500010',
          name: 'Basel SBB',
          score: null,
          coordinate: {
            type: 'WGS84',
            x: 47.547412,
            y: 7.589577,
          },
          distance: null,
        },
      },
      arrival: {
        station: {
          id: '8503000',
          name: 'Zürich HB',
          score: null,
          coordinate: {
            type: 'WGS84',
            x: 47.377847,
            y: 8.540502,
          },
          distance: null,
        },
        arrival: '2023-02-20T21:26:00+0100',
        arrivalTimestamp: 1676924760,
        departure: null,
        departureTimestamp: null,
        delay: 0,
        platform: '5',
        prognosis: {
          platform: null,
          arrival: '2023-02-20T21:26:00+0100',
          departure: null,
          capacity1st: null,
          capacity2nd: null,
        },
        realtimeAvailability: null,
        location: {
          id: '8503000',
          name: 'Zürich HB',
          score: null,
          coordinate: {
            type: 'WGS84',
            x: 47.377847,
            y: 8.540502,
          },
          distance: null,
        },
      },
    },
  ],
} as any;
