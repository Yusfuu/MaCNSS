import type { Resolvers } from '@generated/types';
import { Agent } from './model';
import { hash, compare } from 'bcrypt';
import { generateJWT } from '@lib/jwt';
export const resolvers: Resolvers = {
  Query: {
    agents: async () => {
      const agents = await Agent.find({});
      return agents;
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      const agent = await Agent.findOne({ email });

      if (!agent) {
        throw new Error('Invalid email or password');
      }

      const isValid = await compare(password, agent.password);

      if (!isValid) {
        throw new Error('Invalid email or password');
      }

      const token = generateJWT({
        id: agent.id,
      });

      return { token, user: agent };
    },
    createAgent: async (_, { name, email, password }) => {
      const hashedPassword = await hash(password, 10);
      const agent = await Agent.create({
        name,
        email,
        password: hashedPassword,
      });
      return agent;
    },
    deleteAgent: async (_, { id }) => {
      const agent = await Agent.findByIdAndDelete(id);
      return agent;
    },
    updateAgent: async (_, { id, name, email, password }) => {
      const agent = await Agent.findByIdAndUpdate(id, {
        name,
        email,
        password,
      });
      return agent;
    },
  },
};
