const { Op } = require('sequelize');
const { NotificatioTicket } = require('../models/index');

class TicketRepository {
    async getAll(){
        try {
            const tickets = await NotificatioTicket.findAll();
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const ticket = await NotificatioTicket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async get(filter){
        try {
            const ticket = await NotificatioTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            })
            return ticket;
        } catch (error) {
            
        }
    }

    async update(ticketId, data){
        try {
            const ticket = await NotificatioTicket.findByPk(ticketId);
            
            if(data.status)
                ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TicketRepository;