import { render, screen } from '@testing-library/react';
import TripDetailsCard from '../src/components/Cards/TripDetailsCard';
import '@testing-library/jest-dom';

jest.mock('next/router', () => require('next-router-mock'));

describe('Trip Card Details', () => {
  it('should render correct departure location', () => {
    render(<TripDetailsCard section={section} index={0} lastIndex={2} />);

    const element = screen.getByTestId('details-departure');
    expect(element).toHaveTextContent('Basel SBB');
  });

  it('should render correct destination', () => {
    render(<TripDetailsCard section={section} index={0} lastIndex={2} />);

    const element = screen.getByTestId('details-destination');
    expect(element).toHaveTextContent('Zürich HB');
  });
});

var section = {
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
} as any;
