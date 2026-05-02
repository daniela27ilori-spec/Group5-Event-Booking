import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class PaystackProvider {
  private secretKey: string;
  private baseUrl = 'https://api.paystack.co';

  constructor(private config: ConfigService) {
    this.secretKey = this.config.get<string>('PAYSTACK_SECRET_KEY') || '';
  }

  async initializePayment(data: { amount: number; email: string; reference: string; metadata?: any }) {
    const response = await axios.post(
      `${this.baseUrl}/transaction/initialize`,
      {
        amount: data.amount * 100,
        email: data.email,
        reference: data.reference,
        metadata: data.metadata,
      },
      {
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data.data.authorization_url;
  }
}