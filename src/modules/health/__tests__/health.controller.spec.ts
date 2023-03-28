import { HealthController } from '../health.controller';

describe('HealthController', () => {
  let healthController: HealthController;

  describe('/health', () => {
    it('should return status OK', async () => {
      const response = healthController.getHealth();
      expect(response).toEqual({ status: 'OK' });
    });
  });
});
