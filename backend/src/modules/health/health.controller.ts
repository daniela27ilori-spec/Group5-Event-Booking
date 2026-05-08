import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Controller('health')
export class HealthController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async check() {
    const status = {
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      database: 'unknown',
    };

    try {
      // Try to query the database
      await this.prisma.$queryRaw`SELECT 1`;
      status.database = 'connected';
      
      return {
        status: 'ok',
        ...status,
      };
    } catch (error) {
      status.database = 'disconnected';
      
      return {
        status: 'error',
        ...status,
      };
    }
  }
}